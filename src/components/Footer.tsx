import { TreePine } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <TreePine className="w-6 h-6" />
            <span className="font-serif text-xl font-semibold">Granupphämtning i Trollhättan</span>
          </div>
          <p className="text-primary-foreground/80 max-w-md mb-6">
            Vi hjälper dig att bli av med julgranen på ett miljövänligt sätt. 
            Alla granar återvinns lokalt.
          </p>
          <div className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Granupphämtning i Trollhättan. Alla rättigheter förbehållna.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
