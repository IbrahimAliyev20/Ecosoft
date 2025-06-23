"use client";

import React, {  useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PhoneRecordApiResponse } from "@/types/alltype";
import { useTranslations } from "next-intl";

interface QuickOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickOfferModal({
  isOpen,
  onClose,
}: QuickOfferModalProps) {

  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    question: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const payload = {
        name: formData.name,
        surname: formData.surname,
        phone: formData.phone,
        question: formData.question,
      };

      const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/offer-form`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "az",
        },
        body: JSON.stringify(payload),
      });

      const result: PhoneRecordApiResponse = await response.json();

      if (response.ok && result.status) {
        setSuccessMessage(`${t("quickOffer.success")}`);
        setFormData({ name: "", surname: "", question: "", phone: "" });
        setTimeout(onClose, 2000);
      } else {
        setErrorMessage(
          result.message || "Server xətası. Zəhmət olmasa yenidən cəhd edin."
        );
      }
    } catch (error) {
      console.error("Quick offer form submission error:", error);
      if (error instanceof Error) {
        setErrorMessage(
          error.message ||
            "Bir xəta baş verdi. Zəhmət olmasa yenidən cəhd edin."
        );
      } else {
        setErrorMessage(
          "Bir naməlum xəta baş verdi. Zəhmət olmasa yenidən cəhd edin."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="backdrop-filter backdrop-blur-xs" />
      <DialogContent className="w-[484px] rounded-xl shadow-xl p-0">
        <DialogHeader className="p-6 text-start ">
          <Image
            src="/image/logo.svg"
            alt="Logo"
            width={89}
            height={81}
            priority={true}
            className="mb-2"
          />
          <DialogTitle className="text-2xl font-semibold text-gray-800">
            {t("quickOffer.title")}
          </DialogTitle>
          {/* <DialogDescription className="text-sm text-gray-600">
            Hesabınıza giriş etmək üçün mobil nömrənizi daxil edin
          </DialogDescription> */}
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-6 pt-0 space-y-4">
          <div className="space-y-4">
            <label
              htmlFor="name"
              className="text-base text-gray-600 font-medium"
            >
              {t("quickOffer.name")}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("quickOffer.name")}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            />
            <label
              htmlFor="surname"
              className="text-base text-gray-600 font-medium "
            >
              {t("quickOffer.surname")}
            </label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder={t("quickOffer.surname")}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            />
            <label
              htmlFor="phone"
              className="text-base text-gray-600 font-medium"
            >
              {t("quickOffer.phone")}
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("quickOffer.phone")}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            />
            <label
              htmlFor="question"
              className="text-base text-gray-600 font-medium "
            >
              {t("quickOffer.question")}
            </label>
            <textarea
              name="question"
              value={formData.question}
              onChange={handleChange}
              placeholder={t("quickOffer.question")}
              rows={3}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
              required
            />
          </div>

          {successMessage && (
            <p className="text-green-600 text-sm">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-600 text-sm">{errorMessage}</p>
          )}

          <DialogFooter>
            <Button
              variant="default"
              type="submit"
              disabled={loading}
              className="w-full py-3 text-lg font-semibold text-primary-foreground transition-colors flex items-center justify-center gap-2"
            >
              {loading ?  `${t("quickOffer.sending")}` : `${t("quickOffer.send")}`}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
