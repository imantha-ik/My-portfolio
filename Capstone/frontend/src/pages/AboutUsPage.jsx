import React from 'react';
import AboutGallery from '@/components/AboutGallery';
import {
    GraduationCap,
    School,
    Globe,
    Video,
    Languages,
    Users,
    BookOpen,
    Newspaper,
    Gavel
  } from 'lucide-react';
  

const AboutUsPage = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-white dark:from-background dark:to-muted text-foreground">
      {/* WHY SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-20 gap-10">
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Why.</h2>
          <p className="text-xl font-semibold">
            We created Elemental Aim because we wanted to make a contribution to reduce the statistic that globally one in five children are out of school.
          </p>
          <p className="text-muted-foreground">
            We believe the most effective way to achieve this is by supporting existing grassroots schools created by communities responding to unique needs. The schools we visited and volunteered at inspired us with their determination and creativity despite immense challenges.
          </p>
        </div>
        <img src="/images/aboutus/1.jpg" alt="Why" className="w-full lg:w-1/2 rounded-lg shadow-lg" />
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-20 gap-10">
        <img src="/images/aboutus/2.png" alt="Who We Are" className="w-full lg:w-1/2 rounded-lg shadow-lg" />
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl font-bold">Who We Are.</h2>
          <p className="text-muted-foreground">
            Hi. We are Rob Morrison and Kate Fitzgerald, Australian educators from NSW. After getting married, we traveled to Nicaragua, Mexico, and India to work and complete our teaching degrees. While away, we discovered innovative schools helping children gain access to education.
          </p>
          <p className="text-muted-foreground">
            We decided to support these schools long-term through a film and educational resource unit for Australian schools. From here, we created a model to raise awareness and support schools overseas.
            <br />
            We hope after <a href="/film" className="text-primary underline">watching our film</a>, you’ll feel connected to their stories too.
          </p>
        </div>
      </section>


    {/* THANKS SECTION */}
    <section className="bg-teal-500/80 text-white px-6 py-20">
  <div className="max-w-7xl mx-auto space-y-10">
    {/* Heading and Intro */}
    <div className="text-center">
    <h2 className="text-4xl font-extrabold mb-4 text-black dark:text-white">
  Our Special Thanks To…
</h2>

      <p className="text-lg max-w-3xl mx-auto text-white/90 leading-relaxed">
        This project and the creation of our Educational Resource Package would not have been
        possible without the generous contributions, time, and expertise of these incredible individuals
        and organizations. Thank you for believing in our mission.
      </p>
    </div>

    {/* Thank You Columns */}
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-base leading-relaxed">
  {/* Column 1 */}
  <ul className="space-y-4">
    <li className="flex items-start gap-2"><GraduationCap className="w-5 h-5 text-white" /><span><strong>Ruchika Social Services</strong> – India (Benudhar Senapati & R. P. Dwivedy)</span></li>
    <li className="flex items-start gap-2"><School className="w-5 h-5 text-white" /><span><strong>Shidhulai Swanirvar Sangstha</strong> – Founder Mohammed Rezwan</span></li>
    <li className="flex items-start gap-2"><Globe className="w-5 h-5 text-white" /><span><strong>Del Fortin</strong> – Nicaragua (Amalia Cuadra & Karla Pacheco)</span></li>
    <li className="flex items-start gap-2"><Video className="w-5 h-5 text-white" /><span><strong>Steve Sapienza</strong> – PBS creator of <em>‘A Floating Future’</em></span></li>
    
    
  </ul>

  {/* Column 2 */}
  <ul className="space-y-4">
  
    <li className="flex items-start gap-2"><Users className="w-5 h-5 text-white" /><span><strong>Advisors:</strong> Narelle Nies, Penny Hutton, Peter Anderson</span></li>
    <li className="flex items-start gap-2"><Users className="w-5 h-5 text-white" /><span><strong>Helen Zwicker</strong> – Project Advisor</span></li>
    <li className="flex items-start gap-2"><Newspaper className="w-5 h-5 text-white" /><span><strong>Dom Fitzgerald & Yoona Sohn</strong> – Media & Communications</span></li>
    <li className="flex items-start gap-2"><Gavel className="w-5 h-5 text-white" /><span><strong>Priscilla Blackadder</strong> – Pro-bono Legal Advisor</span></li>
    <li className="flex items-start gap-2"><Languages className="w-5 h-5 text-white" /><span><strong>Oriya Translators:</strong> Sujeet Jena & Asit</span></li>
  </ul>

  {/* Column 3 */}
  <ul className="space-y-4">
    <li className="flex items-start gap-2"><Video className="w-5 h-5 text-white" /><span><strong>Gregory Miller & Dr. Georgia Wallace-Crabbe</strong> – Film Editing</span></li>
    <li className="flex items-start gap-2"><Languages className="w-5 h-5 text-white" /><span><strong>Latinos Australia</strong> – Support with translations</span></li>
    <li className="flex items-start gap-2"><BookOpen className="w-5 h-5 text-white" /><span>Countless <strong>grassroots educators</strong> and community leaders who shared their stories</span></li>
    <li className="flex items-start gap-2"><Languages className="w-5 h-5 text-white" /><span><strong>Spanish Translators:</strong> Maria Amigo, Angelina Seeto, and more</span></li>
  </ul>
</div>



  </div>
</section>



      {/* GALLERY */}


      <AboutGallery />

      {/* FOOTER TEXT */}
      <footer className="bg-background py-10 px-4 border-t border-border/40">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    
    {/* Text Content */}
    <div className="text-center md:text-left text-muted-foreground text-base max-w-xl leading-relaxed">
      <p>
        <span className="font-semibold text-foreground">Elemental Aim (ABN: 32 618 759 390)</span> is registered as a charity
        through the ACNC and is endorsed as a Deductible Gift Recipient.
      </p>
      <p className="mt-3">
        All donations of $2 and over are tax deductible.
      </p>
    </div>

    {/* Logo */}
    <div className="flex-shrink-0">
      <img
        src="/images/aboutus/3.png" 
        alt="Registered Charity Logo"
        className="w-32 md:w-40 h-auto"
      />
    </div>
  </div>
</footer>



    </div>
  );
};

export default AboutUsPage;
