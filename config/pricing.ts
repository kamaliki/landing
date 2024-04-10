import { Pricing } from "@/types/pricing";
import { featuresConfig } from "./features";

export const pricingConfig: Pricing[] = [
    {
        level: "Starter",
        price: "$0",
        includes: "Free forever plan",
        features_list: featuresConfig.features.map(feature => feature.title).slice(0, 3),
    },
    {
        level: "Pro",
        price: "$10",
        includes: "Includes all starter features.",
        features_list: featuresConfig.features.map(feature => feature.title).slice(3, 6),
    },
    {
        level: "Enterprise",
        price: "$25",
        includes: "Includes all pro features.",
        features_list: featuresConfig.features.map(feature => feature.title).slice(6, 9),
    },
];