import Button from "./ui/button";
import heroCards from "@/components/heroCards.jsx";

export default function HeroSection() {
	return (
		<section
			style={{
				backgroundImage: "url('/images/heroImage.webp')",
			}}
			className="bg-cover bg-center h-[125vh]"
		>
			<div className="flex items-center pt-64 justify-start flex-col h-screen gap-7">
				<p className="text-white">320 40th Street B4, New York, NY 10019</p>
				<h1 className="heading-light mb-7">Nura Residence</h1>
				<div className="flex-center gap-5">
					<Button variant="light">Discover More</Button>
					<Button variant="dark">Call Us Now</Button>
				</div>
			</div>
			<heroCards />
		</section>
	);
}
