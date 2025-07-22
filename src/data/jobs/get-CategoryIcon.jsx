// getCategoryIcon.jsx
import React from "react";
import {
  HelpCircle,
  DollarSign,
  Laptop,
  Users,
  PencilRuler,
  HeartPulse,
  Utensils,
  Megaphone,
  Package,
  BookText,
  Hammer,
  Folder,
  Scale,
  Palette,
  GraduationCap,
  ShoppingBag,
  Lightbulb,
  Factory,
  FlaskConical,
  Handshake,
  Plane,
  Home,
  HeartHandshake,
  Wrench,
  Clock,
  Tag,
  BrushCleaning,
  Flame,
} from "lucide-react";

export const getCategoryIcon = (tag, className) => {
  switch (tag) {
    case "accounting-finance-jobs":
      return <DollarSign className={className} />;
    case "it-jobs":
      return <Laptop className={className} />;
    case "sales-jobs":
      return <Megaphone className={className} />;
    case "customer-services-jobs":
      return <Users className={className} />;
    case "engineering-jobs":
      return <PencilRuler className={className} />;
    case "hr-jobs":
    case "healthcare-nursing-jobs":
      return <HeartPulse className={className} />;
    case "hospitality-catering-jobs":
      return <Utensils className={className} />;
    case "pr-advertising-marketing-jobs":
      return <Megaphone className={className} />;
    case "logistics-warehouse-jobs":
      return <Package className={className} />;
    case "teaching-jobs":
      return <BookText className={className} />;
    case "trade-construction-jobs":
      return <Hammer className={className} />;
    case "admin-jobs":
      return <Folder className={className} />;
    case "legal-jobs":
      return <Scale className={className} />;
    case "creative-design-jobs":
      return <Palette className={className} />;
    case "graduate-jobs":
      return <GraduationCap className={className} />;
    case "retail-jobs":
      return <ShoppingBag className={className} />;
    case "consultancy-jobs":
      return <Lightbulb className={className} />;
    case "manufacturing-jobs":
      return <Factory className={className} />;
    case "scientific-qa-jobs":
      return <FlaskConical className={className} />;
    case "social-work-jobs":
      return <Handshake className={className} />;
    case "travel-jobs":
      return <Plane className={className} />;
    case "energy-oil-gas-jobs":
      return <Flame className={className} />; // replaced 'Gas'
    case "property-jobs":
      return <Home className={className} />;
    case "charity-voluntary-jobs":
      return <HeartHandshake className={className} />;
    case "domestic-help-cleaning-jobs":
      return <BrushCleaning className={className} />;
    case "maintenance-jobs":
      return <Wrench className={className} />;
    case "part-time-jobs":
      return <Clock className={className} />;
    case "other-general-jobs":
      return <BriefcaseBusiness className={className} />;
    case "unknown-jobs":
      return <HelpCircle className={className} />;
    default:
      return <Tag className={className} />;
  }
};
