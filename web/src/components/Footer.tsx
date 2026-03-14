import { Linkedin, Instagram, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <footer className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.3)" }}>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="inline-flex items-center gap-1 text-2xl font-bold mb-4"><span style={{ color: "#00D4FF" }}>CM</span><span className="text-white">Tecnologia</span></a>
            <p className="text-white/45 text-sm leading-relaxed max-w-sm">Transformamos processos manuais em máquinas de crescimento autónomas. Automação, marketing e desenvolvimento de produto — feitos para escalar.</p>
            <div className="flex items-center gap-3 mt-6">
              {[{ icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }, { icon: Instagram, href: "https://instagram.com", label: "Instagram" }, { icon: Twitter, href: "https://twitter.com", label: "Twitter/X" }].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-[#00D4FF] transition-colors" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}><Icon size={16} /></a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2.5">{[{ label: "Serviços", href: "#services" }, { label: "Casos de Sucesso", href: "#cases" }, { label: "Sobre Nós", href: "#" }, { label: "Blog", href: "#" }].map((link) => (<li key={link.label}><a href={link.href} className="text-sm text-white/45 hover:text-[#00D4FF] transition-colors">{link.label}</a></li>))}</ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Suporte</h4>
            <ul className="space-y-2.5">{[{ label: "Contacto", href: "#contact" }, { label: "Calculadora ROI", href: "#roi" }, { label: "Política de Privacidade", href: "#" }, { label: "Termos de Serviço", href: "#" }].map((link) => (<li key={link.label}><a href={link.href} className="text-sm text-white/45 hover:text-[#00D4FF] transition-colors">{link.label}</a></li>))}</ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p>© 2026 CMTecnologia. Todos os direitos reservados.</p>
          <p>Feito com precisão em Portugal</p>
        </div>
      </div>
    </footer>
  );
}