/*
Design reminder for this file:
Neo-noir corporativo com painéis tecnológicos premium.
Princípios: composição assimétrica, superfícies translúcidas, brilho azul/violeta controlado, autoridade enterprise.
Pergunta-guia: esta escolha reforça ou dilui nossa filosofia visual?
*/

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  Check,
  CircleDollarSign,
  Globe,
  Layers3,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  MoveRight,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const whatsappLink =
  "https://wa.me/559984027548?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20da%20Nexus%20Tech";
const email = "comercial@nexustecnologialtda.com.br";

const heroChart = [
  { mes: "Jan", leads: 22 },
  { mes: "Fev", leads: 31 },
  { mes: "Mar", leads: 43 },
  { mes: "Abr", leads: 58 },
  { mes: "Mai", leads: 71 },
  { mes: "Jun", leads: 92 },
];

const revenueBars = [
  { nome: "Antes", valor: 37 },
  { nome: "Depois", valor: 89 },
];

const channelMix = [
  { name: "WhatsApp", value: 42, color: "#52d4ff" },
  { name: "Landing Page", value: 33, color: "#7c6cff" },
  { name: "Google", value: 25, color: "#b47cff" },
];

const metrics = [
  { value: "+300%", label: "aumento de leads", icon: TrendingUp },
  { value: "+150%", label: "crescimento em vendas", icon: CircleDollarSign },
  { value: "+500", label: "empresas atendidas", icon: ShieldCheck },
  { value: "24/7", label: "automação e captação ativa", icon: Bot },
];

const services = [
  {
    title: "Landing Page Profissional",
    price: "R$ 1.500",
    featured: false,
    description:
      "Estrutura focada em conversão com design premium, captação de leads e integração direta com WhatsApp.",
    items: [
      "Criação de landing page profissional de alta conversão",
      "Design moderno e responsivo",
      "Integração direta com WhatsApp",
      "Formulário de captação de clientes",
      "Estrutura otimizada para anúncios",
      "Instalação de pixel Meta e Google Analytics",
      "Layout focado em vendas",
      "Carregamento rápido",
      "Bônus em Imperatriz: domínio + hospedagem + VPS por 1 ano grátis",
    ],
  },
  {
    title: "Manutenção da Landing Page",
    price: "R$ 300/mês",
    featured: false,
    description:
      "Plano opcional para manter sua página atualizada, segura e pronta para novas campanhas.",
    items: [
      "Alterações de textos",
      "Troca de imagens",
      "Atualizações de conteúdo",
      "Ajustes de layout simples",
      "Suporte técnico prioritário",
    ],
  },
  {
    title: "Plano Estrutura de Vendas",
    price: "R$ 2.700 + R$ 500/mês por 12 meses",
    featured: true,
    description:
      "A solução mais contratada para empresas que precisam montar uma operação digital completa para vender mais com consistência.",
    items: [
      "Landing page profissional ou site estratégico",
      "Catálogo online de produtos ou serviços",
      "Integração com WhatsApp para vendas",
      "Criação ou otimização do perfil no Google Maps",
      "Gestão básica de redes sociais",
      "Criação de posts estratégicos",
      "Estrutura de captação de leads",
      "Estratégia inicial de vendas online",
      "Suporte e acompanhamento mensal",
    ],
  },
];

const avulsos = [
  ["Landing Page profissional", "R$ 1.500"],
  ["Site institucional", "R$ 2.500"],
  ["Catálogo online", "R$ 1.500"],
  ["Criação de logomarca", "R$ 250"],
  ["Identidade visual completa", "R$ 1.200"],
  ["Criação de perfil no Google Maps", "R$ 400"],
  ["Automação de WhatsApp", "R$ 1.200"],
  ["Gestão de redes sociais", "A partir de R$ 800/mês"],
  ["Gestão de tráfego pago", "A partir de R$ 1.200/mês"],
  ["Desenvolvimento de sistemas", "A partir de R$ 6.000"],
  ["Criação de aplicativos", "A partir de R$ 12.000"],
];

const processSteps = [
  {
    step: "01",
    title: "Diagnóstico do negócio",
    text: "Entendemos seu cenário atual, objetivos comerciais e gargalos que impedem o crescimento digital.",
    icon: BrainCircuit,
  },
  {
    step: "02",
    title: "Planejamento estratégico",
    text: "Definimos a arquitetura da presença digital, canais de aquisição e prioridades de implementação.",
    icon: Target,
  },
  {
    step: "03",
    title: "Desenvolvimento das soluções",
    text: "Construímos landing pages, sites, automações, catálogos e ativos digitais com padrão premium.",
    icon: Layers3,
  },
  {
    step: "04",
    title: "Implementação",
    text: "Publicamos a estrutura, conectamos ferramentas, ativamos integrações e iniciamos a operação.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "Otimização para crescimento",
    text: "Monitoramos métricas, refinamos campanhas e melhoramos continuamente a performance comercial.",
    icon: Workflow,
  },
];

const testimonials = [
  {
    name: "Carlos Henrique",
    role: "Diretor comercial, empresa de serviços",
    city: "São Luís, MA",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/GAZ9ynrWcz76jWsvwgxncj/nexus-client-avatar-1-SYTB9uvyCKQq29kNPxbiy2.webp",
    quote:
      "Em poucas semanas, nossa operação digital passou a gerar muito mais contatos qualificados. A Nexus Tech nos entregou estrutura, posicionamento e clareza comercial.",
  },
  {
    name: "Mariana Lopes",
    role: "Gestora, clínica especializada",
    city: "São Luís, MA",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/GAZ9ynrWcz76jWsvwgxncj/nexus-client-avatar-2-YJXqkEEvQVpaCyqoEaZpPZ.webp",
    quote:
      "O site e a automação com WhatsApp melhoraram muito nossa conversão. Hoje temos mais previsibilidade nas campanhas e uma imagem muito mais profissional.",
  },
  {
    name: "Rafael Sousa",
    role: "Sócio, varejo regional",
    city: "Fortaleza, CE",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/GAZ9ynrWcz76jWsvwgxncj/nexus-client-avatar-3-FpnyPp363i9rb7zeK8ikm3.webp",
    quote:
      "A sensação é de ter contratado uma empresa de tecnologia muito maior do que estávamos acostumados. O resultado foi aumento real nas vendas e na confiança da marca.",
  },
  {
    name: "Patrícia Gomes",
    role: "Empresária do setor de estética",
    city: "São Luís, MA",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/GAZ9ynrWcz76jWsvwgxncj/nexus-client-avatar-4-o28Dp5urERAPsL2HH5yu8a.webp",
    quote:
      "Antes tínhamos presença digital, mas não tínhamos uma estrutura que realmente convertesse. Depois da Nexus Tech, nosso atendimento ficou mais organizado e as vendas aumentaram com muito mais consistência.",
  },
  {
    name: "Eduardo Martins",
    role: "Diretor de operação comercial",
    city: "Fortaleza, CE",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/GAZ9ynrWcz76jWsvwgxncj/nexus-client-avatar-5-aoUNy4fzpdNquXxFqvJCAJ.webp",
    quote:
      "O que mais chamou atenção foi a combinação entre visual profissional, estratégia e velocidade de execução. A Nexus Tech nos ajudou a parecer maiores, mais confiáveis e mais preparados para vender.",
  },
];

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver o site?",
    answer:
      "O prazo varia conforme a complexidade, mas uma landing page profissional costuma ser entregue com agilidade após alinhamento estratégico, conteúdo e aprovação visual.",
  },
  {
    question: "Preciso pagar domínio e hospedagem?",
    answer:
      "Para novos clientes de Imperatriz, a Nexus Tech oferece domínio profissional, hospedagem premium e VPS dedicado gratuitos por 1 ano dentro da oferta de lançamento.",
  },
  {
    question: "Vocês oferecem suporte?",
    answer:
      "Sim. Temos opção de manutenção mensal e acompanhamento estratégico, com suporte técnico prioritário para ajustes e evolução da estrutura digital.",
  },
  {
    question: "Vocês ajudam na geração de clientes?",
    answer:
      "Sim. Nosso trabalho é criar a estrutura digital para atrair leads, facilitar o fechamento e aumentar a previsibilidade comercial da sua empresa.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/90 backdrop-blur-xl">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(82,212,255,0.16),_transparent_24%),radial-gradient(circle_at_80%_10%,_rgba(124,108,255,0.18),_transparent_20%),linear-gradient(180deg,_#050816_0%,_#080d1e_35%,_#050712_100%)] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(130,104,255,0.10),_transparent_45%)]" />

      <header className="sticky top-0 z-40 border-b border-white/8 bg-slate-950/55 backdrop-blur-2xl">
        <div className="container flex items-center justify-between py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/25 via-sky-400/10 to-violet-500/25 shadow-[0_0_40px_rgba(82,212,255,0.18)] backdrop-blur-xl">
              <span className="bg-gradient-to-r from-cyan-200 to-violet-200 bg-clip-text text-lg font-black text-transparent">
                N
              </span>
            </div>
            <div>
              <div className="font-display text-lg font-bold tracking-wide text-white">
                Nexus Tech
              </div>
              <div className="text-xs tracking-[0.25em] text-slate-400 uppercase">
                Tech & Marketing
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
            <a href="#sobre" className="transition hover:text-white">Sobre</a>
            <a href="#servicos" className="transition hover:text-white">Serviços</a>
            <a href="#processo" className="transition hover:text-white">Processo</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>

          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <Button className="rounded-full border border-cyan-300/30 bg-white/10 px-5 text-white shadow-[0_0_24px_rgba(82,212,255,0.15)] backdrop-blur-xl transition hover:bg-cyan-400 hover:text-slate-950">
              Falar no WhatsApp
            </Button>
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden pb-24 pt-14 lg:pb-30 lg:pt-20">
          <div className="container">
            <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.65 }}
                className="relative z-10"
              >
                <SectionLabel>Estrutura digital para crescer com previsibilidade</SectionLabel>
                <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                  Transformamos Empresas em
                  <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                    Máquinas de Vendas Digitais
                  </span>
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">
                  Soluções completas de tecnologia, marketing e automação para empresas que querem crescer, vender mais e bater metas com uma estrutura que transmite autoridade e acelera o fechamento.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
                  <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2 backdrop-blur-xl">
                    Atuação no Maranhão e Ceará
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2 backdrop-blur-xl">
                    Escritórios em São Luís, Imperatriz e Fortaleza
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a href="#servicos">
                    <Button size="lg" className="h-13 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-8 text-base font-semibold text-slate-950 shadow-[0_0_40px_rgba(105,123,255,0.45)] transition hover:scale-[1.02]">
                      Ver Serviços
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    <Button size="lg" variant="outline" className="h-13 rounded-full border-white/16 bg-white/6 px-8 text-base text-white backdrop-blur-xl transition hover:bg-white/12">
                      Falar no WhatsApp
                    </Button>
                  </a>
                </div>

                <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {metrics.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 * index, duration: 0.55 }}
                        className="rounded-3xl border border-white/10 bg-white/6 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl"
                      >
                        <div className="flex items-center gap-3 text-cyan-200">
                          <div className="rounded-2xl bg-cyan-400/10 p-2">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="text-2xl font-bold text-white">{item.value}</div>
                        </div>
                        <div className="mt-3 text-sm leading-6 text-slate-300">{item.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute -left-12 top-12 h-36 w-36 rounded-full bg-cyan-400/18 blur-3xl" />
                <div className="absolute -right-6 bottom-8 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-3 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(82,212,255,0.08),transparent_38%,rgba(124,108,255,0.10)_100%)]" />
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/GAZ9ynrWcz76jWsvwgxncj/nexus-hero-visual-6vHiidKnpALAtiDeuqn3cn.webp"
                    alt="Painel futurista com dashboard de crescimento digital"
                    className="h-[250px] w-full rounded-[1.5rem] object-cover sm:h-[320px] lg:h-[380px]"
                  />
                  <div className="relative -mt-12 grid gap-4 px-4 pb-4 sm:grid-cols-2">
                    <Card className="border-white/12 bg-slate-950/72 text-white backdrop-blur-2xl">
                      <CardContent className="p-5">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <div className="text-sm text-slate-400">Leads mensais</div>
                            <div className="mt-1 text-2xl font-bold">+300%</div>
                          </div>
                          <Badge className="border-0 bg-emerald-400/15 text-emerald-300">
                            Em alta
                          </Badge>
                        </div>
                        <div className="h-28">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={heroChart}>
                              <defs>
                                <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#52d4ff" stopOpacity={0.55} />
                                  <stop offset="95%" stopColor="#52d4ff" stopOpacity={0} />
                                </linearGradient>
                              </defs>
                              <XAxis dataKey="mes" hide />
                              <YAxis hide />
                              <Tooltip
                                contentStyle={{
                                  background: "rgba(15,23,42,0.92)",
                                  border: "1px solid rgba(255,255,255,0.08)",
                                  borderRadius: "16px",
                                }}
                              />
                              <Area
                                type="monotone"
                                dataKey="leads"
                                stroke="#52d4ff"
                                strokeWidth={3}
                                fill="url(#heroFill)"
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-white/12 bg-slate-950/72 text-white backdrop-blur-2xl">
                      <CardContent className="p-5">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <div className="text-sm text-slate-400">Operação comercial</div>
                            <div className="mt-1 text-2xl font-bold">Dashboard ativo</div>
                          </div>
                          <LineChart className="h-5 w-5 text-violet-300" />
                        </div>
                        <div className="space-y-3">
                          {[78, 86, 92].map((value, idx) => (
                            <div key={value}>
                              <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                                <span>{["Captação", "Conversão", "Automação"][idx]}</span>
                                <span>{value}%</span>
                              </div>
                              <div className="h-2 rounded-full bg-white/8">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${value}%` }}
                                  transition={{ duration: 1.2, delay: idx * 0.15 }}
                                  className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="sobre" className="relative py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-2xl"
            >
              <SectionLabel>Sobre a empresa</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
                Tecnologia, marketing e inteligência estratégica para acelerar empresas.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                A Nexus Tech é especializada em tecnologia, marketing digital e soluções estratégicas para crescimento empresarial. Nosso papel é transformar empresas tradicionais em negócios digitais altamente lucrativos, com estrutura, posicionamento e performance para fechar mais contratos.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Aumentar vendas",
                  "Atrair mais clientes",
                  "Automatizar processos",
                  "Posicionar sua marca no mercado",
                  "Crescer com estratégias digitais",
                  "Transmitir autoridade e confiança na decisão de compra",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-slate-950/40 p-4">
                    <div className="mt-0.5 rounded-full bg-emerald-400/12 p-1.5 text-emerald-300">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                {
                  icon: Globe,
                  title: "Presença digital de alto padrão",
                  text: "Sites, landing pages e ativos pensados para transmitir autoridade, gerar confiança e converter melhor.",
                },
                {
                  icon: MonitorSmartphone,
                  title: "Experiência responsiva e moderna",
                  text: "Interfaces rápidas, claras e alinhadas ao padrão visual de empresas premium de tecnologia.",
                },
                {
                  icon: MessageCircle,
                  title: "Captação integrada com WhatsApp",
                  text: "Reduza atrito no contato comercial e acelere o fechamento com fluxos mais diretos.",
                },
                {
                  icon: Bot,
                  title: "Automação para escalar",
                  text: "Menos processos manuais, mais velocidade operacional e consistência no atendimento.",
                },
              ].map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="border-white/10 bg-white/6 text-white backdrop-blur-2xl">
                    <CardContent className="p-6">
                      <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-white">{feature.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{feature.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <div className="overflow-hidden rounded-[2rem] border border-violet-300/14 bg-[linear-gradient(135deg,rgba(24,34,72,0.92),rgba(10,13,27,0.92))] shadow-[0_30px_120px_rgba(48,30,112,0.28)]">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 sm:p-10 lg:p-12">
                  <Badge className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-amber-200">
                    Oferta de Lançamento
                  </Badge>
                  <h2 className="mt-6 font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
                    Oferta Especial para Empresas de Imperatriz
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                    Para celebrar a chegada da Nexus Tech em Imperatriz, estamos oferecendo uma estrutura completa de presença digital com benefícios exclusivos para novos clientes da cidade.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      "Domínio profissional",
                      "Hospedagem premium",
                      "VPS dedicado",
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm font-medium text-slate-100 backdrop-blur-xl">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 rounded-2xl border border-emerald-300/16 bg-emerald-400/10 p-5 text-base font-semibold text-emerald-200">
                    Tudo gratuito por 1 ano para novos clientes.
                  </div>
                </div>
                <div className="relative min-h-[320px] overflow-hidden">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/GAZ9ynrWcz76jWsvwgxncj/nexus-imperatriz-offer-cbvAbqA3iJS2rQtFfxhvZC.webp"
                    alt="Arte tecnológica destacando oferta especial da Nexus Tech"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-950/8 to-slate-950/40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  icon: MapPin,
                  title: "Atuação regional forte",
                  text: "Atendemos empresas em todo o Maranhão e Ceará com foco comercial, presença digital e posicionamento estratégico.",
                },
                {
                  icon: Building2,
                  title: "Escritórios em pontos estratégicos",
                  text: "Presença em São Luís, Imperatriz e Fortaleza para atender negócios que querem crescer com suporte mais próximo.",
                },
                {
                  icon: Mail,
                  title: "Contato comercial profissional",
                  text: `Atendimento direto pelo e-mail ${email} e WhatsApp para orçamentos, suporte e alinhamento comercial.`,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6 backdrop-blur-2xl">
                    <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="servicos" className="py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <SectionLabel>Serviços e planos</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                Estruturas comerciais digitais desenhadas para vender mais.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                Cada solução foi organizada para unir presença digital, autoridade de marca e facilidade de conversão em canais de venda. O objetivo não é apenas ter um site bonito, mas fazer o cliente confiar e entrar em contato.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 xl:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className={`relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-2xl ${
                    service.featured
                      ? "border-cyan-300/30 bg-[linear-gradient(180deg,rgba(25,38,88,0.78),rgba(10,14,31,0.9))] shadow-[0_30px_120px_rgba(82,212,255,0.12)]"
                      : "border-white/10 bg-white/6 shadow-[0_24px_80px_rgba(2,6,23,0.32)]"
                  }`}
                >
                  {service.featured && (
                    <Badge className="mb-5 rounded-full border-0 bg-gradient-to-r from-cyan-300 to-violet-400 px-4 py-2 text-slate-950">
                      Plano mais contratado
                    </Badge>
                  )}
                  <h3 className="font-display text-2xl font-semibold text-white">{service.title}</h3>
                  <div className="mt-4 text-3xl font-bold tracking-[-0.03em] text-white">{service.price}</div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
                  <div className="mt-7 space-y-3">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                        <div className="mt-1 rounded-full bg-cyan-400/12 p-1.5 text-cyan-200">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex">
                    <Button className={`h-12 rounded-full px-6 ${service.featured ? "bg-white text-slate-950 hover:bg-slate-100" : "bg-white/10 text-white hover:bg-white/16"}`}>
                      Solicitar proposta
                    </Button>
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-2xl sm:p-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <SectionLabel>Serviços avulsos</SectionLabel>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    Soluções sob demanda para reforçar a sua operação.
                  </h3>
                </div>
                <p className="max-w-xl text-sm leading-7 text-slate-300">
                  Escolha entregas específicas para acelerar um projeto, atualizar sua presença digital ou estruturar novas frentes de crescimento.
                </p>
              </div>
              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {avulsos.map(([name, price]) => (
                  <div key={name} className="flex items-center justify-between rounded-2xl border border-white/8 bg-slate-950/38 px-5 py-4">
                    <span className="text-sm text-slate-200">{name}</span>
                    <span className="text-sm font-semibold text-cyan-200">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-2xl"
            >
              <SectionLabel>Resultados</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
                Provas visuais de uma operação orientada por performance.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Estruturamos experiências digitais com foco em crescimento, geração de demanda e melhoria contínua dos números comerciais.
              </p>
              <div className="mt-8 h-[340px] overflow-hidden rounded-[1.6rem] border border-white/8">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/GAZ9ynrWcz76jWsvwgxncj/nexus-results-panel-5LzcxmBctwyx26vocjZgev.webp"
                  alt="Painel futurista com indicadores de crescimento"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <div className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-white/10 bg-white/6 text-white backdrop-blur-2xl">
                  <CardContent className="p-6">
                    <div className="mb-5 flex items-center gap-3 text-cyan-200">
                      <BarChart3 className="h-5 w-5" />
                      <span className="text-sm font-medium tracking-wide text-slate-300">Comparativo de vendas</span>
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/8 bg-slate-950/40 p-4 text-center">
                        <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Antes</div>
                        <div className="mt-2 text-3xl font-bold text-white">37</div>
                      </div>
                      <div className="rounded-2xl border border-cyan-300/18 bg-cyan-400/8 p-4 text-center">
                        <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/70">Depois</div>
                        <div className="mt-2 text-3xl font-bold text-cyan-200">89</div>
                      </div>
                    </div>
                    <div className="h-56">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={revenueBars}>
                          <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.06)" />
                          <XAxis dataKey="nome" tick={{ fill: "#cbd5e1", fontSize: 12 }} axisLine={false} tickLine={false} />
                          <YAxis hide />
                          <Tooltip
                            cursor={{ fill: "rgba(255,255,255,0.04)" }}
                            contentStyle={{
                              background: "rgba(15,23,42,0.94)",
                              border: "1px solid rgba(255,255,255,0.08)",
                              borderRadius: "16px",
                            }}
                          />
                          <Bar dataKey="valor" radius={[12, 12, 0, 0]}>
                            {revenueBars.map((entry) => (
                              <Cell key={entry.nome} fill={entry.nome === "Depois" ? "#52d4ff" : "#475569"} />
                            ))}
                            <LabelList dataKey="valor" position="top" fill="#e2e8f0" fontSize={14} />
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-white/10 bg-white/6 text-white backdrop-blur-2xl">
                  <CardContent className="p-6">
                    <div className="mb-5 flex items-center gap-3 text-violet-200">
                      <Target className="h-5 w-5" />
                      <span className="text-sm font-medium tracking-wide text-slate-300">Origem dos contatos</span>
                    </div>
                    <div className="h-56">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={channelMix} dataKey="value" innerRadius={56} outerRadius={82} paddingAngle={4}>
                            {channelMix.map((entry) => (
                              <Cell key={entry.name} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              background: "rgba(15,23,42,0.94)",
                              border: "1px solid rgba(255,255,255,0.08)",
                              borderRadius: "16px",
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="grid gap-2">
                      {channelMix.map((item) => (
                        <div key={item.name} className="flex items-center justify-between text-sm text-slate-300">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                            {item.name}
                          </div>
                          <span>{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {metrics.slice(0, 3).map((item) => (
                  <div key={item.label} className="rounded-[1.6rem] border border-white/10 bg-slate-950/44 p-6 backdrop-blur-xl">
                    <div className="text-3xl font-bold text-white">{item.value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="processo" className="py-24">
          <div className="container grid gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <SectionLabel>Processo de trabalho</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                Da estratégia à otimização, cada etapa foi pensada para gerar avanço real.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                Atuamos com método, clareza operacional e foco em crescimento. Isso reduz improvisos e aumenta a eficiência da sua estrutura digital.
              </p>
              <div className="mt-10 space-y-4">
                {processSteps.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      className="rounded-[1.7rem] border border-white/10 bg-white/6 p-5 backdrop-blur-2xl"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/85">Etapa {item.step}</div>
                            <h3 className="mt-1 font-display text-xl font-semibold text-white">{item.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                          </div>
                        </div>
                        <MoveRight className="hidden h-5 w-5 text-slate-500 sm:block" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-3 backdrop-blur-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663444462587/GAZ9ynrWcz76jWsvwgxncj/nexus-process-visual-fCejhU3xYbrQH4JcuroypR.webp"
                alt="Fluxo tecnológico representando as etapas do processo da Nexus Tech"
                className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-[1.6rem] border border-white/10 bg-slate-950/72 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Pipeline estratégico</div>
                    <div className="mt-2 font-display text-2xl font-semibold text-white">Operação orientada por etapas</div>
                  </div>
                  <Badge className="border-0 bg-cyan-400/12 text-cyan-200">5 fases</Badge>
                </div>
                <div className="mt-5 h-2 rounded-full bg-white/8">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4 }}
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container">
            <div className="max-w-3xl">
              <SectionLabel>Depoimentos</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                Empresas procuram a Nexus Tech para crescer com mais estrutura e confiança.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Reforçamos credibilidade, aumentamos a percepção de valor e entregamos uma estrutura digital que faz sua empresa parecer mais sólida, mais preparada e muito mais pronta para vender.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="rounded-[2rem] border border-white/10 bg-white/6 p-7 backdrop-blur-2xl"
                >
                    <div className="mb-5 flex items-center gap-4">

                    <img
                      src={testimonial.image}
                      alt={`Cliente ${testimonial.name}`}
                      className="h-16 w-16 rounded-2xl object-cover ring-1 ring-white/10"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="mt-1 text-sm text-slate-400">{testimonial.role}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-cyan-200/80">{testimonial.city}</div>
                    </div>
                  </div>
                  <div className="mb-5 flex items-center gap-2 text-cyan-200">
                    <Quote className="h-4 w-4" />
                    {[...Array(5)].map((_, starIndex) => (
                      <Sparkles key={starIndex} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="text-base leading-8 text-slate-200 italic">“{testimonial.quote}”</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
                Perguntas comuns antes de iniciar o projeto.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                Reunimos respostas diretas para acelerar a tomada de decisão e tornar o processo comercial mais transparente.
              </p>
            </div>
            <Card className="border-white/10 bg-white/6 text-white backdrop-blur-2xl">
              <CardContent className="p-3 sm:p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={faq.question} value={`item-${index}`} className="border-white/8 px-2">
                      <AccordionTrigger className="text-left text-base font-medium text-white hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-7 text-slate-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="pb-28 pt-8">
          <div className="container">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-cyan-300/18 bg-[linear-gradient(135deg,rgba(14,22,48,0.96),rgba(7,10,22,0.96))] px-8 py-10 shadow-[0_30px_120px_rgba(34,197,255,0.14)] sm:px-10 sm:py-14 lg:px-14">
              <div className="absolute -left-8 top-0 h-48 w-48 rounded-full bg-cyan-400/12 blur-3xl" />
              <div className="absolute right-0 top-8 h-56 w-56 rounded-full bg-violet-500/16 blur-3xl" />
              <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <SectionLabel>Chamada final</SectionLabel>
                  <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                    Pronto para transformar sua empresa em uma máquina de vendas digital?
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                    Nossa equipe está pronta para criar a estrutura digital que sua empresa precisa para crescer, dominar o mercado e chamar muito mais atenção de clientes que já estão procurando por credibilidade e resultado.
                  </p>
                </div>
                <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6 backdrop-blur-2xl">
                  <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Contato</div>
                  <div className="mt-3 text-2xl font-bold text-white">WhatsApp +55 99 8402-7548</div>
                  <a href={`mailto:${email}`} className="mt-3 block text-sm text-cyan-200 hover:text-cyan-100">
                    {email}
                  </a>
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      <Button className="h-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 text-slate-950 hover:opacity-95">
                        Falar no WhatsApp
                      </Button>
                    </a>
                    <a href={`mailto:${email}`}>
                      <Button variant="outline" className="h-12 rounded-full border-white/16 bg-white/6 px-6 text-white hover:bg-white/12">
                        Solicitar orçamento
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-slate-950/60 py-8 backdrop-blur-xl">
        <div className="container grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="font-display text-xl font-bold text-white">NEXUS TECH SOLUÇÕES EM TECNOLOGIA LTDA</div>
            <div className="mt-2 text-sm leading-7 text-slate-400">
              Nome fantasia: nexus tecnologia. Atuação no Maranhão e no Ceará, com escritórios em São Luís, Imperatriz e Fortaleza.
            </div>
            <div className="mt-2 text-sm leading-7 text-slate-400">
              E-mail comercial: {email}
            </div>
            <div className="mt-2 text-sm leading-7 text-slate-400">
              CNPJ: 52.671.137/0001-71.
            </div>
          </div>
          <div className="text-sm text-slate-500">
            © Nexus Tech. Presença digital, tecnologia e crescimento comercial.
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-15 w-15 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 shadow-[0_20px_50px_rgba(16,185,129,0.35)] transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
