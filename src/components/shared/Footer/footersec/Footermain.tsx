import React from 'react';

export default function FooterMain() {
  return (
    <footer className="bg-background text-muted-foreground border-t border-border">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-2 md:mb-0">
          © Ecosoft 2025, All Rights Reserved
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
          <a href="#" className="hover:text-foreground">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}