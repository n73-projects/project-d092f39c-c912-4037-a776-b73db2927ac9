import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { Building2, Users, Award, Phone, Mail, MapPin, Hammer, Wrench, Building, Truck } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="#home">
              <Building2 className="h-6 w-6" />
              <span className="font-bold">BuildCorp</span>
            </a>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a href="#home" className="transition-colors hover:text-foreground/80 text-foreground">Home</a>
              <a href="#services" className="transition-colors hover:text-foreground/80 text-foreground/60">Services</a>
              <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</a>
              <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a>
            </nav>
          </div>
          <div className="ml-auto">
            <Button variant="default">Get Quote</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="secondary" className="w-fit">
                  🏗️ Professional Construction
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Building Your Dreams Into Reality
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  With over 25 years of experience, we deliver exceptional construction services
                  from residential homes to commercial buildings. Quality, reliability, and innovation
                  are at the core of everything we do.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Start Your Project</Button>
                <Button variant="outline" size="lg">View Portfolio</Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">500+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Award Winning</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-[400px] w-full rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 p-8">
                <div className="absolute inset-0 rounded-lg bg-black/20"></div>
                <div className="relative z-10 flex h-full flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold">Premium Construction</h3>
                  <p className="mt-2 text-sm opacity-90">
                    Modern techniques, traditional craftsmanship
                  </p>
                </div>
                <Building className="absolute top-8 right-8 h-16 w-16 text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge variant="secondary">Our Services</Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Complete Construction Solutions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From concept to completion, we provide comprehensive construction services
              tailored to meet your specific needs and exceed your expectations.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Building className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Residential Construction</CardTitle>
                <CardDescription>
                  Custom homes, renovations, and residential projects built with precision and care.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Custom Home Building</li>
                  <li>• Home Renovations</li>
                  <li>• Kitchen & Bath Remodeling</li>
                  <li>• Home Additions</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Building2 className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Commercial Construction</CardTitle>
                <CardDescription>
                  Office buildings, retail spaces, and commercial facilities designed for success.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Office Buildings</li>
                  <li>• Retail Spaces</li>
                  <li>• Warehouses</li>
                  <li>• Mixed-Use Developments</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Hammer className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Specialty Services</CardTitle>
                <CardDescription>
                  Specialized construction services including design-build and project management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Design-Build Services</li>
                  <li>• Project Management</li>
                  <li>• Green Building</li>
                  <li>• Emergency Repairs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <Badge variant="secondary" className="w-fit">About BuildCorp</Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                25+ Years of Excellence in Construction
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Founded in 1998, BuildCorp has grown from a small local contractor to
                one of the region's most trusted construction companies. Our commitment
                to quality, safety, and customer satisfaction has earned us a reputation
                for excellence.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center space-x-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Award Winning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <span>On-Time Delivery</span>
                </div>
              </div>
              <Button variant="outline" className="w-fit">
                Learn More About Us
              </Button>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge variant="secondary">Get In Touch</Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Contact us today for a free consultation and estimate. We're here to bring your vision to life.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Call Us</CardTitle>
                <CardDescription>
                  Speak with our experts
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold">(555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Mon - Fri, 8AM - 6PM</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Email Us</CardTitle>
                <CardDescription>
                  Send us your project details
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold">info@buildcorp.com</p>
                <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Visit Us</CardTitle>
                <CardDescription>
                  Our office location
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold">123 Construction Ave</p>
                <p className="text-sm text-muted-foreground">Building City, BC 12345</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button size="lg">Get Free Quote</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50/50">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Building2 className="h-6 w-6" />
                <span className="font-bold">BuildCorp</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building excellence, delivering quality construction services since 1998.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Residential Construction</li>
                <li>Commercial Buildings</li>
                <li>Renovations</li>
                <li>Project Management</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Portfolio</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>(555) 123-4567</li>
                <li>info@buildcorp.com</li>
                <li>123 Construction Ave</li>
                <li>Building City, BC 12345</li>
              </ul>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 BuildCorp. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
