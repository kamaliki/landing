import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { pricingConfig } from "@/config/pricing";

export function PricingCards() {
    return (
        <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pricingConfig.map((pricing) => (
                <Card key={pricing.level} className="flex flex-col items-center justify-center space-y-4">
                <CardHeader>
                    <CardTitle>{pricing.level}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-4xl font-bold">{pricing.price}</p>
                    <p className="text-sm text-gray-500">{pricing.includes}</p>
                </CardContent>
                <CardFooter>
                    <ul className="text-sm text-gray-500">
                    {pricing.features_list.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                    </ul>
                </CardFooter>
                </Card>
            ))}
            </div>
        </div>
        </section>
    );
}