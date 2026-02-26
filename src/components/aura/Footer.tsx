
import { Sparkles, Instagram, Facebook, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background py-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-primary p-2 rounded-full">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-headline text-2xl font-bold">Aura<span className="text-primary">Fit</span></span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Inspirando a las personas a vivir su mejor vida a través del movimiento consciente y el amor propio.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-secondary rounded-full text-primary hover:bg-primary hover:text-white transition-all"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="p-2 bg-secondary rounded-full text-primary hover:bg-primary hover:text-white transition-all"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="p-2 bg-secondary rounded-full text-primary hover:bg-primary hover:text-white transition-all"><Twitter className="w-5 h-5" /></Link>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Navegación</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="#about" className="hover:text-primary transition-colors">Sobre mí</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Programas</Link></li>
              <li><Link href="#results" className="hover:text-primary transition-colors">Resultados</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Soporte</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Contacto</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Términos</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacidad</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AuraFit Coaching. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
