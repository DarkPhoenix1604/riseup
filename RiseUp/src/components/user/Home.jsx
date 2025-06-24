import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function HomePage() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("english"); // Default language

// HomePage.js (updated)
// Keep previous imports and component structure, adding these background elements:

<section className="hero animate-on-scroll">
  <div className="hero-overlay"></div>
  <div className="hero-content">
    {/* ... existing hero content ... */}
  </div>
</section>

{/* Add this new section before features */}
<section className="stats">
  <div className="stat-item">
    <h3>1000+</h3>
    <p>Courses Available</p>
  </div>
  <div className="stat-item">
    <h3>500+</h3>
    <p>Career Opportunities</p>
  </div>
  <div className="stat-item">
    <h3>200+</h3>
    <p>Expert Mentors</p>
  </div>
</section>


  // Content for all languages
  const content = {
    english: {
      hero: {
        title: "Fostering Growth in Youth Through Education and Career Opportunities",
        description: "RiseUp helps young people learn new skills, find jobs, and connect with mentors.",
        button: "Get Started"
      },
      journey: {
        title: "Your Journey with RiseUp"
      },
      slides: [
        { id: 1, title: "Courses", description: "Start with learning new skills through our curated courses" },
        { id: 2, title: "Job Listings", description: "Find opportunities that match your new skills" },
        { id: 3, title: "Beyond Tech", description: "Explore non-technical skills to complement your expertise" },
        { id: 4, title: "Self Assessment", description: "Test your knowledge and identify areas for improvement" },
        { id: 5, title: "Mock Interviews", description: "Practice and prepare for real-world interviews" },
        { id: 6, title: "Community", description: "Connect with peers and mentors in our growing network" },
      ],
      about: {
        title: "About RiseUp",
        description: "RiseUp is a platform designed to bridge the gap between education and employment. We provide skill-based learning, career opportunities, and mentorship to help young professionals succeed."
      },
      features: {
        title: "Why Choose RiseUp?",
        cards: [
          { icon: "📚", title: "Personalized Learning", description: "Access courses tailored to your career goals." },
          { icon: "💼", title: "Job Opportunities", description: "Find and apply for jobs that match your skills." },
          { icon: "🤝", title: "Mentorship & Networking", description: "Connect with industry experts and professionals." }
        ]
      },
      cta: {
        title: "Join RiseUp Today",
        description: "Start your journey towards a brighter future."
      }
    },
    hindi: {
      hero: {
        title: "शिक्षा और करियर के अवसरों के माध्यम से युवाओं में विकास को बढ़ावा देना",
        description: "राइज़अप युवाओं को नए कौशल सीखने, नौकरियां खोजने और मेंटर्स से जुड़ने में मदद करता है।",
        button: "शुरू करें"
      },
      journey: {
        title: "राइज़अप के साथ आपकी यात्रा"
      },
      slides: [
        { id: 1, title: "पाठ्यक्रम", description: "हमारे क्यूरेटेड पाठ्यक्रमों के माध्यम से नए कौशल सीखना शुरू करें" },
        { id: 2, title: "नौकरी सूचियाँ", description: "अपने नए कौशल से मेल खाने वाले अवसर खोजें" },
        { id: 3, title: "तकनीक से परे", description: "अपनी विशेषज्ञता को पूरक बनाने के लिए गैर-तकनीकी कौशल का अन्वेषण करें" },
        { id: 4, title: "स्व-मूल्यांकन", description: "अपने ज्ञान का परीक्षण करें और सुधार के क्षेत्रों की पहचान करें" },
        { id: 5, title: "मॉक इंटरव्यू", description: "वास्तविक दुनिया के साक्षात्कार के लिए अभ्यास करें और तैयारी करें" },
        { id: 6, title: "समुदाय", description: "हमारे बढ़ते नेटवर्क में साथियों और मेंटर्स से जुड़ें" },
      ],
      about: {
        title: "राइज़अप के बारे में",
        description: "राइज़अप एक ऐसा प्लेटफॉर्म है जो शिक्षा और रोजगार के बीच की खाई को पाटने के लिए डिज़ाइन किया गया है। हम युवा पेशेवरों को सफल होने में मदद करने के लिए कौशल-आधारित सीखने, करियर के अवसर और मेंटरशिप प्रदान करते हैं।"
      },
      features: {
        title: "राइज़अप क्यों चुनें?",
        cards: [
          { icon: "📚", title: "व्यक्तिगत शिक्षा", description: "अपने करियर लक्ष्यों के अनुरूप पाठ्यक्रमों तक पहुंचें।" },
          { icon: "💼", title: "नौकरी के अवसर", description: "अपने कौशल से मेल खाने वाली नौकरियां खोजें और आवेदन करें।" },
          { icon: "🤝", title: "मेंटरशिप और नेटवर्किंग", description: "उद्योग विशेषज्ञों और पेशेवरों से जुड़ें।" }
        ]
      },
      cta: {
        title: "आज ही राइज़अप से जुड़ें",
        description: "एक उज्जवल भविष्य की ओर अपनी यात्रा शुरू करें।"
      }
    },
    marathi: {
      hero: {
        title: "शिक्षण आणि करिअर संधींच्या माध्यमातून तरुणांच्या विकासाला चालना देणे",
        description: "राइजअप तरुणांना नवीन कौशल्ये शिकण्यास, नोकऱ्या शोधण्यास आणि मार्गदर्शकांशी जोडण्यास मदत करते.",
        button: "सुरू करा"
      },
      journey: {
        title: "राइजअपसह तुमचा प्रवास"
      },
      slides: [
        { id: 1, title: "अभ्यासक्रम", description: "आमच्या निवडलेल्या अभ्यासक्रमांद्वारे नवीन कौशल्ये शिकण्यापासून सुरुवात करा" },
        { id: 2, title: "नोकरी जाहिराती", description: "तुमच्या नवीन कौशल्यांशी जुळणाऱ्या संधी शोधा" },
        { id: 3, title: "तंत्रज्ञानापलीकडे", description: "तुमच्या विशेषज्ञतेला पूरक करण्यासाठी नॉन-टेक्निकल कौशल्यांचा शोध घ्या" },
        { id: 4, title: "स्व-मूल्यांकन", description: "तुमच्या ज्ञानाची चाचणी घ्या आणि सुधारणेच्या क्षेत्रांची ओळख करा" },
        { id: 5, title: "मॉक मुलाखती", description: "वास्तविक जगातील मुलाखतींसाठी सराव करा आणि तयारी करा" },
        { id: 6, title: "समुदाय", description: "आमच्या वाढत्या नेटवर्कमध्ये सहकारी आणि मार्गदर्शकांशी जोडा" },
      ],
      about: {
        title: "राइजअप बद्दल",
        description: "राइजअप हे शिक्षण आणि रोजगार यांच्यातील अंतर कमी करण्यासाठी डिझाइन केलेले प्लॅटफॉर्म आहे. आम्ही तरुण व्यावसायिकांना यशस्वी होण्यास मदत करण्यासाठी कौशल्य-आधारित शिक्षण, करिअरच्या संधी आणि मार्गदर्शन प्रदान करतो."
      },
      features: {
        title: "राइजअप का निवडावे?",
        cards: [
          { icon: "📚", title: "वैयक्तिक शिक्षण", description: "तुमच्या करिअरच्या उद्दिष्टांनुसार अभ्यासक्रमांमध्ये प्रवेश करा." },
          { icon: "💼", title: "नोकरीच्या संधी", description: "तुमच्या कौशल्यांशी जुळणाऱ्या नोकऱ्या शोधा आणि अर्ज करा." },
          { icon: "🤝", title: "मार्गदर्शन आणि नेटवर्किंग", description: "उद्योगातील तज्ञ आणि व्यावसायिकांशी जोडा." }
        ]
      },
      cta: {
        title: "आज राइजअपमध्ये सामील व्हा",
        description: "उज्ज्वल भविष्याकडे तुमचा प्रवास सुरू करा."
      }
    }
  };

  // Language selector function
  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const navigateToCourses = () => {
    navigate("/courses");
  };

  // Get current language content
  const currentContent = content[language];

  return (
    <div className="homepage">
      {/* Language Toggle NavLinks */}
      <nav className="language-nav">
        <div className="language-options">
        <button 
  style={{ 
    padding: '10px 20px', 
    margin: '5px',
    borderRadius: '4px', 
    backgroundColor: language === 'english' ? '#da0000' : '#f0f0f0', 
    color: language === 'english' ? 'white' : 'black' 
  }}
  onClick={() => changeLanguage('english')}
>
  English
</button>
<button 
  style={{ 
    padding: '10px 20px', 
    margin: '5px', 
    borderRadius: '4px', 
    backgroundColor: language === 'hindi' ? '#da0000' : '#f0f0f0', 
    color: language === 'hindi' ? 'white' : 'black' 
  }}
  onClick={() => changeLanguage('hindi')}
>
हिंदी
</button>
<button 
  style={{ 
    padding: '10px 20px', 
    margin: '5px', 
    borderRadius: '4px', 
    backgroundColor: language === 'marathi' ? '#da0000' : '#f0f0f0', 
    color: language === 'marathi' ? 'white' : 'black' 
  }}
  onClick={() => changeLanguage('marathi')}
>
मराठी
</button>

     

        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{currentContent.hero.title}</h1>
          <p>{currentContent.hero.description}</p>
          <button className="cta-button" onClick={navigateToCourses}>
            {currentContent.hero.button}
          </button>
        </div>
      </section>

      {/* Flow Slideshow Section */}
      <section className="flow-slideshow">
        <h2>{currentContent.journey.title}</h2>
        <div className="slideshow-container">
          {currentContent.slides.map((slide, index) => (
            <div key={slide.id} className={`slide slide-${index + 1}`}>
              <div className="slide-number">{slide.id}</div>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>{currentContent.about.title}</h2>
        <p>{currentContent.about.description}</p>
      </section>

      {/* Key Features */}
      <section className="features">
        <h2>{currentContent.features.title}</h2>
        <div className="feature-cards">
          {currentContent.features.cards.map((card, index) => (
            <div key={index} className="feature-card">
              <h3>{card.icon} {card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>{currentContent.cta.title}</h2>
        <p>{currentContent.cta.description}</p>
      </section>
    </div>
  );
}