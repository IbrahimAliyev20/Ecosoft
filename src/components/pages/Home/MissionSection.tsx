import Image from 'next/image';
import React from 'react';

export function MissionSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-0 px-12  md:p-8">
      <div className="flex flex-col items-center text-center">
        <div className="bg-cyan-50 rounded-full p-4 mb-4">
          <Image
          src="/icons/Goal.svg"
          alt="goal"
          width={32}
          height={32}
          className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">Missiyamız</h3>
        <p className="text-muted-foreground">
          Güvenilir Çözüm Ortağınız Kepenek İnşaat olarak inşaat, emlak ve turizm konaklama alanlarında Alanya da uzun yıllardır hizmet vermekteyiz.
        </p>
      </div>

      <div className="flex flex-col items-center text-center md:border-x-2 border-border border-0 ">
        <div className="bg-cyan-50 rounded-full p-4 mb-4">
          <Image
          src="/icons/ScanEye.svg"
          alt="goal"
          width={32}
          height={32}
          className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">Vizyonumuz</h3>
        <p className="text-muted-foreground">
          Güvenilir Çözüm Ortağınız Kepenek İnşaat olarak inşaat, emlak ve turizm konaklama alanlarında Alanya da uzun yıllardır hizmet vermekteyiz.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="bg-cyan-50 rounded-full p-4 mb-4">
          <Image
          src="/icons/HandHeart.svg"
          alt="goal"
          width={32}
          height={32}
          className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">Dəyərimiz</h3>
        <p className="text-muted-foreground">
          Güvenilir Çözüm Ortağınız Kepenek İnşaat olarak inşaat, emlak ve turizm konaklama alanlarında Alanya da uzun yıllardır hizmet vermekteyiz.
        </p>
      </div>
    </div>
  );
}