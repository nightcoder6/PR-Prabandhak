import React, { useState } from 'react';
import { Building2, Users, Target, Youtube, Instagram, Facebook, Twitter, Link as LinkIcon, Megaphone, Building, Phone, Mail, MapPin, Linkedin } from 'lucide-react';

interface FormData {
  name: string;
  age: string;
  gender: string;
  pincode: string;
  youtubeLink: string;
  instagramLink: string;
  facebookLink: string;
  twitterLink: string;
  otherLink: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    gender: '',
    pincode: '',
    youtubeLink: '',
    instagramLink: '',
    facebookLink: '',
    twitterLink: '',
    otherLink: ''
  });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">PR Prabandhak</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('path')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Choose Path
              </button>
              <button 
                onClick={() => scrollToSection('founders')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Founders
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Mission
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">PR Prabandhak</h1>
          <p className="text-xl">Transforming ideas into digital reality</p>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              About Us
            </h2>
            <p className="text-gray-600 mb-4">
            At PR Prabandhak, we craft data-driven social media strategies tailored to each client’s industry, audience, and goals. With deep market insights and a network of 1,000+ influencers, we deliver high-impact campaigns that maximize engagement and drive results.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Path Selection */}
      <section id="path" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Path</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => console.log('Brand path selected')}
            >
              <div className="flex flex-col items-center text-center">
                <Building className="h-16 w-16 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">I'm a Brand</h3>
                <p className="text-gray-600">
                  Looking to collaborate with influencers and expand your brand's reach? Partner with us to connect
                  with the perfect content creators.
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Coming Soon
                </button>
              </div>
            </div>
            <div 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={scrollToForm}
            >
              <div className="flex flex-col items-center text-center">
                <Megaphone className="h-16 w-16 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">I'm an Influencer</h3>
                <p className="text-gray-600">
                  Ready to monetize your influence and work with amazing brands? Join our network of successful
                  content creators.
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Users className="h-8 w-8 text-blue-600" />
            Meet Our Founders
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="aspect-w-1 aspect-h-1 mb-6">
              <img
  src="/src/assets/Manish.jpg"
  alt="Manish Jha"
  className="rounded-lg object-contain w-full h-[300px]"
/>
              </div>
              <h3 className="text-2xl font-bold mb-2">Manish Jha</h3>
              <p className="text-blue-600 font-semibold mb-4">CEO & Co-founder</p>
              <p className="text-gray-600">
              With a strong background in analytics and influencer marketing, Manish excels in driving engagement and fostering meaningful collaborations.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="aspect-w-1 aspect-h-1 mb-6">
                <img
                  src="/src/assets/Sudhir.jpg"
                  alt="Sudhir Narwal"
                  className="rounded-lg object-contain w-full h-[300px]"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Sudhir Narwal</h3>
              <p className="text-blue-600 font-semibold mb-4">CTO & Co-founder</p>
              <p className="text-gray-600">
              Sudhir brings a wealth of experience in digital marketing and creative strategies, ensuring every campaign delivers measurable results. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Target className="h-8 w-8 text-blue-600" />
            Our Mission
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Our mission is to transform the creator economy by forging authentic, data-driven partnerships between brands and influencers. We aim to drive mutual growth, ensuring impactful collaborations that resonate with audiences and deliver lasting success.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Continuously pushing boundaries to create cutting-edge solutions
                  for the digital age.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Integrity</h3>
                <p className="text-gray-600">
                  Building trust through transparent practices and authentic
                  relationships.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Impact</h3>
                <p className="text-gray-600">
                  Creating meaningful change in the creator economy and digital
                  marketing landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      {showForm && (
        <section id="registration-form" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Influencer Registration</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="age">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="pincode">Location Pincode</label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Youtube className="text-red-600" />
                  <input
                    type="url"
                    name="youtubeLink"
                    placeholder="YouTube Link"
                    value={formData.youtubeLink}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="text-pink-600" />
                  <input
                    type="url"
                    name="instagramLink"
                    placeholder="Instagram Link"
                    value={formData.instagramLink}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Facebook className="text-blue-600" />
                  <input
                    type="url"
                    name="facebookLink"
                    placeholder="Facebook Link"
                    value={formData.facebookLink}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Twitter className="text-blue-400" />
                  <input
                    type="url"
                    name="twitterLink"
                    placeholder="Twitter Link"
                    value={formData.twitterLink}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon className="text-gray-600" />
                  <input
                    type="url"
                    name="otherLink"
                    placeholder="Other Link"
                    value={formData.otherLink}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-16 border-t">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold">PR Prabandhak</span>
              </div>
              <p className="text-gray-600">
                Connecting top brands with passionate socially-engaged audiences through our network of influencers.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                  <Instagram className="h-5 w-5 text-blue-600" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                  <Linkedin className="h-5 w-5 text-blue-600" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                  <Facebook className="h-5 w-5 text-blue-600" />
                </a>
              </div>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-600">
                    A-31, LGF, Shivalik, Malviya Nagar, New Delhi - 110017
                  </span>
                </li>
                <li>
                  <a href="mailto:hello@techvision.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    hello@techvision.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919669489477" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    +91-9669489477
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-16">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-gray-600">
              &copy; 2024 PR Prabandhak. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;