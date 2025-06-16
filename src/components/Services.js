import React, { useState, useEffect} from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    { 
      name: "THREADING", 
      description: "Precision Shaping: Achieve perfectly sculpted eyebrows with our expert threading technique, designed to enhance your natural beauty.Gentle Hair Removal: Experience a gentle, precise method of hair removal that leaves your skin smooth and beautifully defined.Quick & Effective: Enjoy a quick and effective threading session that delivers lasting results with minimal discomfort.",
      image:"assets/header_threading.jpg",
      options: [
        { name: "EYE BROW", description:"Threading for eyebrows to shape and define." },
        {name:"FORE HEAD", description:" Threading for the forehead area to remove unwanted hair."},
        { name: "UPPER LIP", description: " Threading for the upper lip area to achieve a smooth look." },
        { name: "LOWER LIP", description:" Threading treatment for the lower lip area to remove hair." },
        { name: "CHIN", description:"Threading for the chin to clean and refine the area." },
        {name:"CHICK", description:"Threading for the cheeks to ensure a smooth and clean appearance."},
        { name: "SIDE LOCKS", description:"Threading of side locks to tidy the sides of the face." },
        {name:"NECK", description:"Threading treatment for the neck area to remove unwanted hair."},
        { name: "FULL FACE", description:"Complete face threading for a clean and hair-free look." }
      ]
    },
    { 
      name: "WAXING", 
      description:"Smooth Skin: Achieve silky, smooth skin with our professional waxing services that ensure thorough hair removal. Long-Lasting Results: Enjoy long-lasting smoothness with minimal regrowth and softer hair over time. Gentle Care: Our waxing technique is designed to be as gentle as possible, ensuring a comfortable experience.",
      image:"assets/header_waxing.jpg",
      subheadings: [
        { 
          name: "FACE WAXING", 
          options: [
            {name:"FORE HEAD", description:"Waxing treatment for the forehead to remove unwanted hair."},
            {name:"UPPER LIP", description:"Waxing of the upper lip area for a smooth finish."},
            {name:"LOWER LIP", description:"Waxing treatment for the lower lip area to remove hair."},
            {name:"CHIN", description:"Waxing for the chin area to achieve a clean look."},
            {name:"CHICK", description:"Waxing for the cheeks to ensure a smooth appearance."},
            {name:"SIDE LOCKS", description:"Waxing of side locks for a tidy look."},
            {name:"NECK", description:"Waxing treatment for the neck area to remove unwanted hair."},
            {name:"FULL FACE", description:"Complete face waxing for a smooth and hair-free look."}
          ] 
        },
        { 
          name: "REGULAR WAXING", 
          options: [
            {name:"FULL HAND", description:"Waxing treatment for full hand to remove unwanted hair."},
            {name:"HALF HAND", description:"Waxing for half hand to achieve a smooth finish."},
            {name:"UNDERARMS", description:"Waxing treatment for underarms for a clean and hair-free look."},
            {name:"FULL LEGS", description:"Waxing for full legs to ensure smooth and hair-free skin."},
            {name:"HALF LEGS", description:"Waxing treatment for half legs for a smooth appearance."},
            {name:"BLOUSE LINE", description:"Waxing treatment along the blouse line for a clean look."},
            {name:"FULL BACK/FRONT", description:"Waxing for full back/front to remove unwanted hair."},
            {name:"MIDRIFF", description:"Waxing of the midriff area for a smooth appearance."},
            {name:"BIKINI LINE", description:"Waxing treatment for bikini line to remove hair and prevent irritation."},
            {name:"BUTTOCKS 500", description:"Waxing of buttocks for a clean and smooth finish."},
            {name:"FULL HAND + LEGS + UNDERARMS", description:"Comprehensive waxing for full hand, legs, and underarms."},
            {name:"FULL BODY", description:"Complete body waxing for a hair-free and smooth look."}
          ] 
        },
        { 
          name: "LIPSOLUABLE FLAVORED WAXING", 
          options: [
            {name:"FULL HAND", description:"Flavored waxing treatment for full hand for a pleasant experience."},
            {name:"HALF HAND", description:"Flavored waxing for half hand to achieve smoothness."},
            {name:"UNDERARMS", description:"Flavored waxing treatment for underarms for a clean and fragrant finish."},
            {name:"FULL LEGS", description:"Flavored waxing for full legs for a smoother and pleasant experience."},
            {name:"HALF LEGS", description:"Flavored waxing for half legs to remove hair effectively."},
            {name:"BLOUSE LINE", description:"Flavored waxing along the blouse line for a smooth finish."},
            {name:"FULL BACK/FRONT", description:"Flavored waxing for full back/front for a smooth and pleasant finish."},
            {name:"MIDRIFF", description:"Flavored waxing treatment for the midriff for a pleasant and smooth look."},
            {name:"BIKINI LINE", description:"Flavored waxing for bikini line for a hair-free and gentle experience."},
            {name:"BUTTOCKS 500", description:"Flavored waxing of buttocks for a smooth and comfortable finish."},
            {name:"FULL HAND + LEGS + UNDERARMS", description:"Complete flavored waxing for full hand, legs, and underarms."},
            {name:"FULL BODY", description:"Full body flavored waxing for a smooth and fragrant experience."}
          ] 
        },
        {
          name:"CARTAGE WAXING",
          options: [
            {name:"FULL HAND", description:"Cartage waxing treatment for full hand to remove unwanted hair."},
            {name:"HALF HAND", description:"Cartage waxing for half hand for a smooth finish."},
            {name:"UNDERARMS", description:"Cartage waxing treatment for underarms for a clean and hair-free look."},
            {name:"FULL LEGS", description:"Cartage waxing for full legs to ensure smooth and hair-free skin."},
            {name:"HALF LEGS", description:"Cartage waxing treatment for half legs for a smooth appearance."},
            {name:"BLOUSE LINE", description:"Cartage waxing along the blouse line for a clean look."},
            {name:"FULL BACK/FRONT", description:"Cartage waxing for full back/front to remove unwanted hair."},
            {name:"MIDRIFF", description:"Cartage waxing of the midriff area for a smooth appearance."},
            {name:"BIKINI LINE", description:"Cartage waxing treatment for bikini line to remove hair and prevent irritation."},
            {name:"BUTTOCKS 500", description:"Cartage waxing of buttocks for a clean and smooth finish."},
            {name:"FULL HAND + LEGS + UNDERARMS", description:"Comprehensive cartage waxing for full hand, legs, and underarms."},
            {name:"FULL BODY", description:"Complete body cartage waxing for a hair-free and smooth look."}
          ]
        },
        {
          name:"ARGAN OIL WAXING",
          options: [
            {name:"FULL HAND", description:"Argan oil waxing treatment for full hand for a nourishing and smooth finish."},
            {name:"HALF HAND", description:"Argan oil waxing for half hand to achieve smoothness and nourishment."},
            {name:"UNDERARMS", description:"Argan oil waxing treatment for underarms for a clean and gentle finish."},
            {name:"FULL LEGS", description:"Argan oil waxing for full legs for a smooth and moisturizing experience."},
            {name:"HALF LEGS", description:"Argan oil waxing for half legs to remove hair and nourish the skin."},
            {name:"BLOUSE LINE", description:"Argan oil waxing along the blouse line for a smooth and nourished look."},
            {name:"FULL BACK/FRONT", description:"Argan oil waxing for full back/front for a smooth and hydrating finish."},
            {name:"MIDRIFF", description:"Argan oil waxing treatment for the midriff for a smooth and hydrated appearance."},
            {name:"BIKINI LINE", description:"Argan oil waxing for bikini line for a smooth and gentle experience."},
            {name:"BUTTOCKS 500", description:"Argan oil waxing of buttocks for a smooth and nourishing finish."},
            {name:"FULL HAND + LEGS + UNDERARMS", description:"Comprehensive argan oil waxing for full hand, legs, and underarms."},
            {name:"FULL BODY", description:"Full body argan oil waxing for a smooth and nourishing experience."}
          ]
        }
      ]
    },
    { 
      name: "CLEAN UP'S", 
      description: "Deep Cleansing: Refresh your skin with our thorough cleanup service, designed to remove impurities and unclog pores. Radiant Glow: Experience an instant boost in skin radiance and smoothness after each session. Gentle Exfoliation: Our gentle exfoliation process leaves your skin feeling rejuvenated and soft to the touch.",
      image:"assets/header_cleanup.jpg",
      options: [
        { name: "CLASSIC CLEAN-UP", description: "Traditional facial clean-up to remove impurities and refresh your skin." },
        { name: "ACNE CLEAN-UP", description: "Specialized clean-up treatment focused on acne-prone skin to reduce breakouts and clear pores." },
        { name: "SKIN LIGHTENING", description: "Treatment designed to brighten and even out skin tone." }
      ]
    },
    { 
      name: "FACIALS", 
      description:"Nourishing Treatment: Indulge in our facial service that deeply nourishes your skin, leaving it hydrated and revitalized. Custom Care: Tailored to your skin type, our facial helps to enhance your natural glow and restore balance. Relaxing Experience: Enjoy a soothing and rejuvenating session that promotes healthy, radiant skin.",
      image:"assets/header_facial.jpg",
      subheadings: [
        { 
          name: "FACIAL", 
          options: [
            { name: "FRUIT FACIAL (NORMAL TO DRY SKIN)", description: "Nourishing fruit facial ideal for normal to dry skin types." },
            { name: "FRUIT FACIAL (OILY SKIN)", description: "Fruit facial designed to balance and refresh oily skin." },
            { name: "RADIANCE GLOW", description: "Facial treatment that enhances your natural glow and radiance." },
            {name:"ANTI PROTECTION (UV PROTECTION)", description:"Facial with UV protection to shield your skin from sun damage."},
            {name:"GOLD FACIAL", description:"Luxurious gold facial for a luminous and youthful appearance."},
            {name:"ANTI AGEING", description:"Facial treatment aimed at reducing signs of aging and improving skin elasticity."}
          ] 
        },
        { 
          name: "ESSENTIAL & ADVANCED FACIAL", 
          options: [
            { name: "UV PROTECTION", description: "Facial treatment with added UV protection to safeguard your skin from sun exposure." },
            { name: "SKIN LIGHTENING", description: "Advanced treatment to lighten and brighten the skin tone." },
            {name:"SEBORRHOEA FACIAL", description:"Facial designed for seborrhoea to control oil and reduce shine."},
            {name:"SENSI BALANCE", description:"Gentle facial treatment for sensitive skin to restore balance and comfort."},
            {name:"OXYGEN BOOST AGELESS THERAPY", description:"Oxygen therapy to rejuvenate and promote youthful skin."},
            {name:"COLLAGEN BUILDER", description:"Facial treatment aimed at boosting collagen production for firm and plump skin."},
            {name:"O3 FACIAL", description:"O3 facial treatment for enhanced skin clarity and freshness."},
            {name:"SHAHNAZ GOLD FACIAL", description:"Exclusive gold facial by Shahnaz for a radiant and youthful glow."}
          ] 
        },
        {
          name:"ORGANIC RANGE",
          options: [
            {name:"PEARL FACIAL", description:"Organic pearl facial for a glowing and revitalized complexion."},
            {name:"DIAMOND FACIAL", description:"Luxury diamond facial to enhance skin brightness and smoothness."},
            {name:"AGE REVERSAL", description:"Facial treatment focused on reversing signs of aging for a youthful appearance."},
            {name:"REVITALIZING FACIAL", description:"Facial treatment to refresh and rejuvenate tired and dull skin."},
            {name:"KUMKUMADI FACIAL", description:"Traditional kumkumadi facial using organic ingredients for skin radiance."},
            {name:"ACNE TREATMENT", description:"Specialized facial treatment to target and reduce acne breakouts."}
          ]
        }
      ]
    },
    { 
      name: "BLEACH", 
      description:"Skin Brightening: Lighten and brighten your complexion with our gentle bleach treatment, designed to even out skin tone. Safe & Effective: Achieve a radiant glow with a safe and effective formula that minimizes the appearance of dark spots. Refreshing Care: Experience a refreshed, luminous look that enhances your natural beauty.",
      image:"assets/header_bleach.jpg",
      subheadings: [
        { 
          name: "GOLD BLEACH", 
          options: [
            {name:"FACE", description:"Gold bleach treatment for the face to brighten and rejuvenate the skin."},
            {name:"FACE & NECK", description:"Gold bleach for both face and neck areas for a uniform glow."},
            {name:"FACE, NECK & BACK", description:"Gold bleach treatment for face, neck, and back to enhance overall brightness."}
          ] 
        },
        { 
          name: "OXY BLEACH", 
          options: [
            {name:"FACE", description:"Oxy bleach for the face to lighten and brighten skin tone."},
            {name:"FACE & NECK", description:"Oxy bleach treatment for face and neck for an even glow."},
            {name:"FACE, NECK & BACK", description:"Oxy bleach for face, neck, and back for comprehensive brightening."},
            {name:"FULL HAND", description:"Oxy bleach treatment for full hand to lighten and brighten skin."},
            {name:"FEET", description:"Oxy bleach for feet to achieve a brighter and more even skin tone."}
          ] 
        },
        {
          name:"TAN PACK",
          options: [
            {name:"FACE", description:"Tan pack treatment for the face to reduce tan and even out skin tone."},
            {name:"FACE & NECK", description:"Tan pack for face and neck areas to lighten and rejuvenate skin."},
            {name:"FACE, NECK & BACK", description:"Tan pack treatment for face, neck, and back to tackle tan comprehensively."},
            {name:"FULL HAND", description:"Tan pack for full hand to reduce tan and brighten the skin."},
            {name:"FEET", description:"Tan pack treatment for feet to lighten and refresh skin tone."},
            {name:"FULL BACK/FRONT", description:"Tan pack for full back/front to reduce tan and achieve an even complexion."}
          ]
        }
      ]
    },
    { 
      name: "ADD ON MASK", 
      description: "Personalized Treatment: Elevate your facial experience with a mask specifically chosen to address your skin's unique requirements.Deep Nourishment: Infuse your skin with vital nutrients for a hydrated, radiant complexion. Extra Glow: Enjoy an added layer of rejuvenation, leaving your skin soft, smooth, and glowing.",
      image:"assets/header_addonmask.jpg",
      options: [
        { name: "WHITENING", description:"Mask treatment designed to brighten and even out skin tone." },
        { name: "FIRMING", description:"Mask treatment to improve skin firmness and elasticity." },
        { name: "BRIDAL GLOW", description:"Special mask for achieving a radiant glow perfect for brides." },
        {name:"CASMARA", description:"Luxury Casmara mask known for its rejuvenating and moisturizing benefits."},
        {name:"VITAMIN C", description:"Mask enriched with Vitamin C to brighten and revitalize the skin."},
        {name:"O3", description:"O3 mask treatment to enhance skin clarity and freshness."}
      ]
    },
    { 
      name: "HAIR CUT",
      description: 
      "Precision Styling: Achieve the perfect look with a haircut tailored to your face shape and style preferences. Our expert stylists provide detailed cuts that enhance your natural features and give you a fresh, polished appearance.",
      image:"assets/header_haircut.jpg",
      
      options: [
        { name: "FRINGE CUT", description: "A trendy cut where the front section of hair is trimmed into bangs or fringes, offering a fresh and youthful look." },
        { name: "BABY CUT", description: "A cute and short haircut ideal for toddlers and young children, ensuring easy maintenance and a charming appearance." },
        { name: "BASIC HAIR CUT", description: "A simple and classic haircut that maintains the current length or shape with minor adjustments, suitable for regular upkeep." },
        { name: "LAYER TRIM", description: "A stylish cut that adds volume and movement by trimming hair into layers, enhancing texture and dimension." },
        { name: "ADVANCE HAIR CUT", description: "A modern and sophisticated haircut involving advanced techniques to create a unique and tailored style." },
        { name: "FRENCH CUT", description: "A chic and elegant haircut inspired by French fashion, typically featuring short, clean lines with a polished finish." }
      ]
    },
    { 
      name: "HEAD MASSAGE", 
      description: "Relaxation and Rejuvenation: Experience ultimate relaxation with our soothing head massage, designed to relieve tension and promote overall well-being. This calming treatment helps to reduce stress, improve circulation, and leave you feeling refreshed and revitalized.",
      image:"assets/header_headmassage.jpg",
      options: [
        { name: "OLIVE OIL", description:"Relaxing head massage with nourishing olive oil." },
        { name: "COCONUT OIL", description:"Soothing head massage using coconut oil for deep conditioning." },
        {name:"ALMOND OIL", description:"Gentle head massage with almond oil for added shine and softness."},
        {name:"HERBAL OIL", description:"Head massage with a blend of herbal oils for relaxation and scalp health."}
      ]
    },
    {
      name:"HAIR SPA",
      description:"Nourishing Restoration: Indulge in our luxurious hair spa treatment that revitalizes and restores your hair's natural health. Our specialized therapies hydrate, strengthen, and repair your hair, leaving it silky, smooth, and full of life. Enjoy a pampering experience that enhances shine and resilience while providing deep relaxation.",
      image:"assets/header_hairspa.jpg",
      options: [
        { name: "MOISTURIZING HAIR SPA", description:"Deep moisturizing treatment to nourish and hydrate dry hair."},
        { name: "COLOR SAVER", description:"Treatment designed to protect and extend the life of your hair color."},
        { name: "FRIZZ EASE", description:"Treatment to tame frizz and leave hair smooth and manageable."},
        {name:"REPAIR & REJUVENATE", description:"Revitalizing treatment to repair damaged hair and restore vitality."},
        {name:"ARGAN OIL HAIR SPA", description:"Luxurious hair spa treatment with argan oil for deep conditioning and shine."}
      ]
    },

    { 
      name: "HAIR WASH & BLOW DRY", 
      description: "Refreshing Cleanse: Enjoy a revitalizing hairwash that thoroughly cleanses and refreshes your scalp and hair.Expert Blow Dry: Experience a flawless blow dry that adds volume, shine, and a perfectly styled finish, tailored to your desired look.Long-Lasting Results: Maintain a fresh, salon-quality style with long-lasting results and enhanced manageability.",
      image:"assets/header_hairwash.jpg",
      options: [
        { name: "SHAMPOO, CONDITIONING & BLAST DRY", description: "Thorough washing, conditioning, and drying to leave your hair clean and refreshed." },
        { name: "DEEP CONDITIONING", description: "Intensive conditioning treatment to deeply nourish and hydrate your hair." },
        { name: "BASIC BLOW DRY", description: "Simple blow-dry to give your hair a neat and smooth finish." },
        { name: "ADVANCE BLOW DRY", description: "Professional blow-dry with advanced techniques for a sleek and polished look." },
        { name: "IRONING (CURLS/TONGS)", description: "Creating curls or waves with styling tongs for a beautiful and long-lasting look." }
      ]
    },
    { 
      name: "CROWN HIGHLIGHTS & COLORING", 
      description: "Stylish Crown Highlights: Add a touch of brilliance with our crown highlights, designed to accentuate and frame your face with luminous, dimension-enhancing shades.Vibrant Coloring: Transform your look with our vibrant coloring service, offering rich, long-lasting hues that complement your unique style.Personalized Precision: Achieve a custom, eye-catching finish with precision coloring techniques tailored to highlight your best features.",
      image:"assets/header_haircolor.jpg",
      subheadings: [
        { 
          name: "GREY COVERAGE", 
          options: [
            { name: "10 MIN. COLOR", description: "Quick grey coverage with a 10-minute color treatment." },
            { name: "BASIC COLOR", description: "Standard color treatment for covering grey hair." },
            { name: "AMMONIA FREE", description: "Color treatment without ammonia for a gentler option." }
          ] 
        },
        { 
          name: "GLOBAL COLOR", 
          options: [
            { name: "GLOBAL COLOR BASIC", description: "Full head global color for a consistent color throughout." },
            { name: "AMMONIA FREE", description: "Ammonia-free global color treatment for a more delicate option." }
          ] 
        },
        {
          name:"FASHION COLOR",
          options: [
            {name:"GLOBAL FASHION COLOR", description:"Full head of fashion color for a bold, trendy look."},
            {name:"STREAK", description:"Highlighting select sections of hair with vibrant streaks."},
            {name:"CROWN HIGHLIGHT", description:"Highlighting around the crown of the head for a natural sun-kissed look."},
            {name:"GLOBAL HIGHLIGHT", description:"Full head highlighting for an all-over lightening effect."},
            {name:"COLOR DEPOSITION", description:"Applying color to enhance or alter the existing color of your hair."},
            {name:"OMREY COLOR", description:"A gradient coloring technique for a seamless blend of shades."},
            {name:"COLOR STRIPING", description:"Adding distinct color stripes for a striking effect."},
            {name:"BOLAYAGE", description:"A hand-painted highlighting technique for a soft, natural look."}
          ]
        },
        {
          name:"CHEMICAL TREATMENT",
          options: [
            {name:"KERATIN TREATEMENT", description:"Keratin treatment to smooth and straighten hair."},
            {name:"RE-BONDING", description:"Chemical process to re-bond hair structure for smooth and straight results."},
            {name:"SMOOTHENING", description:"Treatment to reduce frizz and enhance hair smoothness."},
            {name:"KERA SMOOTH", description:"Keratin-based treatment for sleek and manageable hair."},
            {name:"BOTOX TREATEMENT", description:"Deep conditioning treatment to repair and rejuvenate hair."}
          ]
        }
      ]
    },
    { 
      name: "MANICURE / PEDICURE", 
      description: "Luxurious Pampering: Treat your hands and feet to a revitalizing manicure and pedicure, combining exfoliation, hydration, and massage for a truly indulgent experience.Perfectly Polished: Enjoy beautifully groomed nails with expert shaping, cuticle care, and a choice of stunning polish finishes for a polished, professional look.Ultimate Relaxation: Experience relaxation and rejuvenation as we pamper your hands and feet, leaving them feeling soft, smooth, and beautifully refreshed.",
      image:"assets/header_manicure&pedicure.jpg",
      options: [
        {name:"BASIC PEDICURE", description:"Simple pedicure service to clean and refresh your feet."},
        {name:"BASIC MANICURE", description:"Standard manicure to trim, shape, and polish nails."},
        {name:"COCO BUTTER PEDICURE", description:"Moisturizing pedicure using coco butter to soften and nourish feet."},
        {name:"COCO BUTTER MANICURE", description:"Coco butter manicure for a hydrating and smoothing nail treatment."},
        {name:"DEAD SEA PEDICURE", description:"Pedicure using Dead Sea minerals for a therapeutic and rejuvenating experience."},
        {name:"DEAD SEA MANICURE", description:"Dead Sea manicure with minerals to nourish and revitalize your hands."},
        {name:"AROMA PEDICURE", description:"Aromatherapy pedicure incorporating essential oils for a relaxing foot treatment."},
        {name:"AROMA MANICURE", description:"Aroma manicure with essential oils for a soothing and rejuvenating nail care experience."},
        {name:"CRYSTAL PEDICURE", description:"Pedicure using crystal-infused treatments for added shine and vitality."},
        {name:"CRYSTAL MANICURE", description:"Crystal manicure to enhance nail health and appearance with special treatments."},
        {name:"ICE CREAM PEDICURE", description:"Fun and cooling ice cream pedicure for a refreshing and relaxing foot treatment."},
        {name:"ICE CREAM MANICURE", description:"Ice cream manicure for a delightful and invigorating nail care experience."},
        {name:"O3 SPA PEDICURE", description:"O3 spa pedicure for a purifying and rejuvenating foot treatment."},
        {name:"O3 SPA MANICURE", description:"O3 spa manicure for a revitalizing and cleansing nail care session."}
      ]
    },



    { 
      name: "BODY TREATMENT", 
      description: " Revitalizing Experience: Enjoy a comprehensive body treatment designed to rejuvenate your skin, improve circulation, and relieve tension for a refreshing and invigorating experience.Nourishing Care: Our body treatment includes deep cleansing, exfoliation, and hydration to leave your skin feeling smooth, radiant, and deeply nourished.Relaxation & Renewal: Unwind with a soothing treatment that enhances overall well-being, promoting relaxation and a renewed sense of vitality. ",
      image:"assets/header_bodytreatment.jpg",
      options: [
        { name: "BODY MASSAGE (30 MIN)", description:"Relaxing body massage for 30 minutes to ease tension and stress." },
        { name: "BODY MASSAGE (45 MIN)", description:"Extended body massage for 45 minutes for a deeper relaxation experience." },
        {name:"AROMA OIL BODY MASSAGE (45 MIN)", description:"Aroma oil massage for 45 minutes, combining relaxation with the benefits of essential oils."},
        { name: "BODY SCRUB", description:"Exfoliating body scrub to remove dead skin cells and smooth the skin." },
        {name:"BODY POLISHING", description:"Body polishing treatment for a radiant and polished skin texture."},
        { name: "BODY POLISHING & MASSAGE", description:"Combined body polishing and massage for a complete pampering experience." },
        {name:"STEAM BATH", description:"Steam bath to open pores and enhance the body's detoxification process."}
      ]
    },

    { 
      name: "REFLEXOLOGY", 
      description: "Holistic Healing: Experience the therapeutic benefits of reflexology, where gentle pressure is applied to specific points on the feet to promote balance and relieve stress throughout the body.Relaxation & Relief: Enjoy a deeply relaxing session that targets key reflex zones, helping to alleviate tension, improve circulation, and enhance overall well-being.Natural Wellness: Embrace a natural approach to wellness with reflexology, designed to harmonize your body's energy and support your body's self-healing processes.",
      image:"assets/header_reflexology.jpg",
      options: [
        {name:"BACK & NECK (20 MIN)", description:"Reflexology session for the back and neck to relieve tension and promote relaxation."},
        { name: "HAND & SHOULDER (20 MIN)", description:"Reflexology for hands and shoulders to alleviate stress and improve circulation."},
        { name: "FEET (20 MIN)", description:"Reflexology treatment for feet to enhance relaxation and well-being."},
        { name: "FULL LEGS (20 MIN)", description:"Reflexology for full legs to promote relaxation and ease tension."}
      ]
    },
    { 
      name: "NAIL POLISH", 
      description: " Elegant Shine: Achieve a polished and sophisticated look with our nail polish, available in a range of chic colors and finishes to complement any outfit.Durable Coverage: Experience long-lasting color and shine with a formula designed to resist chipping and fading, keeping your nails looking fresh and vibrant.Effortless Application: Enjoy a smooth and easy application with our brush, ensuring even coverage and a flawless finish without the hassle. ",
      image:"assets/header_nailpolish.jpg",
      options: [
        { name: "REGULAR NAIL POLISH", description:"Classic nail polish application for a timeless look."},
        { name: "FRENCH NAIL POLISH", description:"French manicure with a polished and elegant look."}
      ]
    },
    
    { 
      name: "MAKE UP'S", 
      description: "Flawless Finish: Enhance your natural beauty with our professional makeup services, tailored to suit any occasion from everyday wear to special events.Expert Application: Experience a meticulous application that ensures your makeup lasts all day, providing a perfect blend of coverage, color, and contour.Custom Looks: Whether you prefer a subtle glow or a dramatic transformation, our skilled artists customize your look to match your style and preferences, using high-quality products for a stunning result.",
      image:"assets/header_makeup.jpg",
      subheadings: [
        { 
          name: "KREYLON (MAC)", 
          options: [
            { name: "LIGHT MAKE UP", description:"Subtle makeup application for a natural and fresh look." },
            { name: "PARTY MAKE UP", description:"Bold and glamorous makeup suitable for parties and events." },
            { name: "Traditional Bridal Makeup", description:"Classic bridal makeup for a traditional and elegant appearance." }
          ] 
        },
        { 
          name: "MAKEUP (MAC)", 
          options: [
            { name: "LIGHT MAKE UP", description:"Lightweight makeup for a natural and effortless look." },
            { name: "Smokey Eye Look", description:"Dramatic smokey eye makeup for a bold and sophisticated style." },
            { name: "Natural Party Look", description:"Makeup for a natural yet party-ready appearance." },
            { name: "Bridal MAKE UP", description:"Bridal makeup designed to enhance beauty on your special day." }
          ] 
        }
      ]
    }
  ];

  const [selectedService, setSelectedService] = useState(servicesList[0]);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleOptionClick = (service) => {
    setSelectedService(service); // Update the selected service
    setSidebarVisible(false); // Hide the sidebar after selection
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  // Scroll to the top and refresh the content whenever the selectedService changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedService]);

  return (
    <div className="services-container">
     {/* Hamburger Menu Button */}
     <button className="hamburger-menu" onClick={toggleSidebar}>
     <i className="fas fa-caret-down"></i>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarVisible ? 'show' : 'hidden'}`}>
        <h4>Our Services</h4>
        <ul>
          {servicesList.map((service, index) => (
            <li
              key={index}
              className={selectedService.name === service.name ? 'active' : ''}
              onClick={() =>{
                handleOptionClick(service);
                setSelectedService(service);
                setSidebarVisible(false); // Hide sidebar after selection
               }}
            >
              {service.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="content">
        {selectedService.image && (
          <div className="service-header-image">
            <img src={selectedService.image} alt={selectedService.name} />
            <h1 className="header-image-h1">{selectedService.name}</h1> {/* Header image heading */}
          </div>
        )}
        {/* Optionally hide the content h1 by removing or commenting it out */}
        {/* <h1 className="content-h1">{selectedService.name}</h1> */}
        <div className="service-details">
          <h2>{selectedService.name}</h2>
          <p>{selectedService.description.split('.').map((line,index)=>(
            <React.Fragment key={index}>
              {line.trim()}
              <br/>
            </React.Fragment>
          ))}</p>

          {selectedService.options && (
            <ul>
              {selectedService.options.map((option, index) => (
                <li key={index} onClick= {() => handleOptionClick(selectedService)} >
                  <ul> {option.name} <br/> {option.description}</ul>

                </li>
              ))}
            </ul>
          )}

          {selectedService.subheadings &&
            selectedService.subheadings.map((subheading, index) => (
              <div key={index}>
                <h3>{subheading.name}</h3>
                <ul>
                  {subheading.options.map((option, i) => (
                    <li key={index} onClick= {() => handleOptionClick(selectedService)} >
                      <ul> {option.name} <br/> {option.description}</ul>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
       {/* WhatsApp Icon */}
       <a href="https://wa.me/919849695409" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
            </a>

            {/* Call Icon */}
            <a href="tel:+919849695409" className="call-icon" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-phone"></i>
            </a>
    </div>
  );
};

export default Services;

  