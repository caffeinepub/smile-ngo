import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Globe,
  Heart,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useActor } from "./hooks/useActor";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Vision", href: "#our-vision" },
  { label: "Programs", href: "#programs" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact Us", href: "#contact" },
];

const STATS = [
  { value: "500+", label: "Students Supported", icon: BookOpen },
  { value: "50+", label: "Volunteers", icon: Users },
  { value: "20+", label: "Programs", icon: Globe },
  { value: "5", label: "Years of Impact", icon: Heart },
];

const PROGRAMS = [
  {
    id: 1,
    title: "Education Support",
    description:
      "Free tutoring, school supplies, and scholarships for underprivileged students.",
    image: "/assets/generated/program-education.dim_600x400.jpg",
    icon: BookOpen,
    color: "from-amber-500/20 to-orange-500/10",
  },
  {
    id: 2,
    title: "Community Outreach",
    description:
      "Food distribution, hygiene kits, and essential resources for low-income families.",
    image: "/assets/generated/program-community.dim_600x400.jpg",
    icon: Users,
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    id: 3,
    title: "Social Welfare",
    description:
      "Healthcare support, counseling, and assistance for elderly and vulnerable individuals.",
    image: "/assets/generated/program-social.dim_600x400.jpg",
    icon: Heart,
    color: "from-rose-500/20 to-pink-500/10",
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/assets/generated/smile-ngo-logo-transparent.dim_300x100.png"
              alt="Smile NGO"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isScrolled
                    ? "text-foreground hover:text-primary hover:bg-accent"
                    : "text-white hover:text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              data-ocid="nav.secondary_button"
              onClick={() => scrollTo("get-involved")}
              className={`font-medium ${
                isScrolled
                  ? "border-primary text-primary hover:bg-primary hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-foreground"
              }`}
            >
              Volunteer
            </Button>
            <Button
              size="sm"
              data-ocid="nav.primary_button"
              className="bg-primary text-white hover:bg-primary/90 font-medium shadow-warm"
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-md ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <Button
                  variant="outline"
                  data-ocid="nav.secondary_button"
                  onClick={() => {
                    scrollTo("get-involved");
                    setMobileOpen(false);
                  }}
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Volunteer
                </Button>
                <Button
                  data-ocid="nav.primary_button"
                  className="w-full bg-primary text-white hover:bg-primary/90"
                >
                  Donate Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/generated/hero-community.dim_1200x600.jpg')`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/90 text-white text-sm font-medium px-4 py-2 rounded-full mb-6"
          >
            <Sparkles size={14} />
            Making a Difference Since 2021
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Empowering Lives,{" "}
            <span className="text-primary">One Smile at a Time</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-white/90 text-lg md:text-xl leading-relaxed mb-10"
          >
            Providing education, social support, and essential resources to
            students and families in need.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              data-ocid="hero.primary_button"
              onClick={() => scrollTo("get-involved")}
              className="bg-primary text-white hover:bg-primary/90 font-semibold shadow-warm text-base px-8 group"
            >
              Get Involved
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              data-ocid="hero.secondary_button"
              onClick={() => scrollTo("programs")}
              className="border-white text-white hover:bg-white hover:text-foreground font-semibold text-base px-8"
            >
              Our Programs
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}

function ImpactStats() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/15 rounded-2xl mb-4">
                <stat.icon size={28} className="text-white" />
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="our-vision" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              Our Story
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Building Bridges of
              <span className="text-secondary block"> Opportunity</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Smile NGO, our mission is to bridge the gap between privilege
              and poverty. By focusing on education for the youth and social
              welfare for the underserved, we strive to create a society where
              every individual has the resources to succeed and a reason to
              smile.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Smile NGO was founded on the belief that equality starts with
              opportunity. We are a community-driven organization dedicated to
              uplifting the marginalized through direct action and sustainable
              social work.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 size={18} className="text-secondary" />
                Education for All
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 size={18} className="text-secondary" />
                Community First
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 size={18} className="text-secondary" />
                Sustainable Impact
              </div>
            </div>
          </motion.div>

          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-border">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 rounded-2xl p-6 text-center">
                  <BookOpen size={36} className="text-primary mx-auto mb-3" />
                  <div className="font-display font-bold text-2xl text-foreground">
                    Education
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Empowering minds
                  </div>
                </div>
                <div className="bg-secondary/10 rounded-2xl p-6 text-center">
                  <Users size={36} className="text-secondary mx-auto mb-3" />
                  <div className="font-display font-bold text-2xl text-foreground">
                    Community
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Together stronger
                  </div>
                </div>
                <div className="bg-secondary/10 rounded-2xl p-6 text-center">
                  <Heart size={36} className="text-secondary mx-auto mb-3" />
                  <div className="font-display font-bold text-2xl text-foreground">
                    Welfare
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Care for all
                  </div>
                </div>
                <div className="bg-primary/10 rounded-2xl p-6 text-center">
                  <Globe size={36} className="text-primary mx-auto mb-3" />
                  <div className="font-display font-bold text-2xl text-foreground">
                    Outreach
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Wider impact
                  </div>
                </div>
              </div>
            </div>
            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-warm animate-float">
              <Sparkles size={24} className="text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section id="programs" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            What We Do
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each program is designed to create lasting change in the lives of
            those we serve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROGRAMS.map((program, i) => (
            <motion.div
              key={program.id}
              data-ocid={`programs.item.${program.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border group cursor-pointer"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${program.color}`}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-sm">
                  <program.icon size={22} className="text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {program.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium">
                  Learn more{" "}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VolunteerForm() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interestArea: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      toast.error("Not connected. Please try again.");
      return;
    }
    setStatus("loading");
    try {
      await actor.submitVolunteerApplication(
        form.name,
        form.email,
        form.phone,
        form.message,
        form.interestArea,
      );
      setStatus("success");
      toast.success("Application submitted! We'll be in touch soon.");
      setForm({
        name: "",
        email: "",
        phone: "",
        interestArea: "",
        message: "",
      });
    } catch {
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="get-involved" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              Join Us
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Get Involved &
              <span className="text-primary block">Make a Difference</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Your skills, time, and passion can transform lives. Join our
              community of dedicated volunteers and help us create lasting
              change.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: BookOpen,
                  title: "Tutoring & Education",
                  desc: "Help students achieve their academic goals",
                },
                {
                  icon: Users,
                  title: "Community Events",
                  desc: "Organize and participate in outreach programs",
                },
                {
                  icon: Heart,
                  title: "Social Support",
                  desc: "Provide care and assistance to vulnerable individuals",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 bg-accent rounded-xl"
                >
                  <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-foreground text-sm">
                      {item.title}
                    </div>
                    <div className="text-muted-foreground text-sm mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl border border-border p-8 shadow-sm"
            >
              <h3 className="font-heading font-bold text-xl text-card-foreground mb-6">
                Volunteer Application
              </h3>
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="vol-name"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="vol-name"
                    data-ocid="volunteer.input"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="vol-email"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      Email
                    </Label>
                    <Input
                      id="vol-email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="vol-phone"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      Phone
                    </Label>
                    <Input
                      id="vol-phone"
                      type="tel"
                      placeholder="Your phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="vol-interest"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Interest Area
                  </Label>
                  <Select
                    value={form.interestArea}
                    onValueChange={(v) =>
                      setForm((p) => ({ ...p, interestArea: v }))
                    }
                  >
                    <SelectTrigger id="vol-interest">
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Education">Education</SelectItem>
                      <SelectItem value="Community Outreach">
                        Community Outreach
                      </SelectItem>
                      <SelectItem value="Social Welfare">
                        Social Welfare
                      </SelectItem>
                      <SelectItem value="Fundraising">Fundraising</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="vol-msg"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="vol-msg"
                    placeholder="Tell us why you want to volunteer..."
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                  />
                </div>

                {status === "success" && (
                  <div
                    data-ocid="volunteer.success_state"
                    className="flex items-center gap-2 text-secondary text-sm font-medium bg-secondary/10 rounded-lg p-3"
                  >
                    <CheckCircle2 size={16} />
                    Application submitted successfully!
                  </div>
                )}
                {status === "error" && (
                  <div
                    data-ocid="volunteer.error_state"
                    className="flex items-center gap-2 text-destructive text-sm font-medium bg-destructive/10 rounded-lg p-3"
                  >
                    <X size={16} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <Button
                  type="submit"
                  data-ocid="volunteer.submit_button"
                  disabled={status === "loading"}
                  className="w-full bg-primary text-white hover:bg-primary/90 font-semibold shadow-warm"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2
                        size={16}
                        data-ocid="volunteer.loading_state"
                        className="mr-2 animate-spin"
                      />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      toast.error("Not connected. Please try again.");
      return;
    }
    setStatus("loading");
    try {
      await actor.submitContactMessage(
        form.name,
        form.email,
        form.phone,
        form.message,
      );
      setStatus("success");
      toast.success("Message sent! We'll respond shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
      toast.error("Failed to send. Please try again.");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            Reach Out
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: Phone,
                label: "Phone",
                value: "9176093853",
                href: "tel:9176093853",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@smilengo.org",
                href: "mailto:info@smilengo.org",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Tamil Nadu, India",
                href: "#",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-warm transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={22} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium mb-1">
                    {item.label}
                  </div>
                  <div className="font-heading font-semibold text-foreground">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl border border-border p-8 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label
                    htmlFor="c-name"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Name
                  </Label>
                  <Input
                    id="c-name"
                    data-ocid="contact.input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="c-email"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Email
                  </Label>
                  <Input
                    id="c-email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <Label
                  htmlFor="c-phone"
                  className="text-sm font-medium text-foreground mb-1.5 block"
                >
                  Phone
                </Label>
                <Input
                  id="c-phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                />
              </div>
              <div className="mb-6">
                <Label
                  htmlFor="c-msg"
                  className="text-sm font-medium text-foreground mb-1.5 block"
                >
                  Message
                </Label>
                <Textarea
                  id="c-msg"
                  placeholder="How can we help you?"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  required
                />
              </div>

              {status === "success" && (
                <div
                  data-ocid="contact.success_state"
                  className="flex items-center gap-2 text-secondary text-sm font-medium bg-secondary/10 rounded-lg p-3 mb-4"
                >
                  <CheckCircle2 size={16} />
                  Message sent successfully!
                </div>
              )}
              {status === "error" && (
                <div
                  data-ocid="contact.error_state"
                  className="flex items-center gap-2 text-destructive text-sm font-medium bg-destructive/10 rounded-lg p-3 mb-4"
                >
                  <X size={16} />
                  Failed to send. Please try again.
                </div>
              )}

              <Button
                type="submit"
                data-ocid="contact.submit_button"
                disabled={status === "loading"}
                className="w-full bg-primary text-white hover:bg-primary/90 font-semibold shadow-warm"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "smilengo.org";

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="/assets/generated/smile-ngo-logo-transparent.dim_300x100.png"
              alt="Smile NGO"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Empowering lives through education, community outreach, and social
              welfare. Every smile counts, every life matters.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="tel:9176093853"
                className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors text-sm"
              >
                <Phone size={16} className="text-primary" />
                9176093853
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Programs
            </h4>
            <ul className="space-y-2">
              {PROGRAMS.map((p) => (
                <li key={p.id}>
                  <a
                    href="#programs"
                    className="text-white/70 hover:text-primary text-sm transition-colors"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {year} Smile NGO. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/70 text-xs transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Header />
      <main>
        <HeroSection />
        <ImpactStats />
        <AboutSection />
        <ProgramsSection />
        <VolunteerForm />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
