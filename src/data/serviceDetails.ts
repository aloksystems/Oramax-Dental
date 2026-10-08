import type { ServiceSlug } from "./clinic";

export interface ServiceDetail {
  slug: ServiceSlug;
  name: string;
  title: string;
  description: string;
  intro: string;
  whatIs: string[];
  whenRecommended: string[];
  whatToExpect: string[];
  faqs: { q: string; a: string }[];
}

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  "oral-surgery": {
    slug: "oral-surgery",
    name: "Oral Surgery",
    title: "Oral Surgery in Juhu, Mumbai",
    description:
      "Educational information about oral surgery consultation and care with Dr. Khushal Gangwani at Oramax Clinic, Juhu Mumbai.",
    intro:
      "Oral surgery is the branch of dentistry concerned with the diagnosis and surgical care of conditions affecting the teeth, jaws and supporting tissues. A consultation helps determine whether a surgical approach is needed at all — and if so, which option best fits your situation.",
    whatIs: [
      "Oral surgery covers planned procedures involving teeth and their supporting structures — for example, the removal of teeth that cannot be preserved, or the management of impacted teeth.",
      "It is closely connected with imaging (such as X-rays) and careful planning, so that the position of roots, nerves and neighbouring structures is understood before any procedure.",
      "Not every problem needs surgery. Many patients are seen first for assessment, explanation and a second opinion before any decision is made.",
    ],
    whenRecommended: [
      "A tooth that is severely damaged or infected and cannot be restored",
      "Impacted teeth that are causing pain, swelling or repeated infection",
      "Concerns identified on an X-ray by your general dentist",
      "Pre-prosthetic planning, for example before dentures or implants",
    ],
    whatToExpect: [
      "Consultation: discussion of your symptoms, medical history and any X-rays you bring.",
      "Examination and imaging review to assess the position and complexity involved.",
      "A plain-language explanation of options, including observation where appropriate.",
      "If a procedure is planned: what anaesthesia involves, how long healing usually takes, and what follow-up looks like.",
    ],
    faqs: [
      {
        q: "Will I feel pain during the procedure?",
        a: "Procedures are carried out with appropriate local anaesthesia so the area is numb. Your comfort during and after the visit is discussed as part of planning.",
      },
      {
        q: "What should I bring to my consultation?",
        a: "Bring any recent X-rays or prescriptions, a list of medicines you take, and details of medical conditions. This helps the doctor plan safely.",
      },
    ],
  },
  "maxillofacial-surgery": {
    slug: "maxillofacial-surgery",
    name: "Maxillofacial Surgery",
    title: "Maxillofacial Surgery in Juhu, Mumbai",
    description:
      "Educational information about maxillofacial surgical consultation with Dr. Khushal Gangwani, Oral and Maxillofacial Surgeon in Juhu Mumbai.",
    intro:
      "Maxillofacial surgery focuses on conditions of the jaws, face and associated structures. Because this area involves eating, speaking and appearance, consultations give particular attention to function as well as healing.",
    whatIs: [
      "This specialty bridges dentistry and surgery, dealing with the jaws and facial structures rather than routine dental treatment.",
      "Care typically begins with a detailed consultation — history, examination and imaging review — before any treatment is suggested.",
      "The goal of the first visit is clarity: what the condition is, which options exist, and what each option involves.",
    ],
    whenRecommended: [
      "Jaw-related pain, swelling or asymmetry that needs specialist assessment",
      "Facial injury or suspected jaw fracture requiring surgical opinion",
      "Cysts or growths of the jaws identified clinically or on imaging",
      "Referral from a dentist or physician for a surgical opinion",
    ],
    whatToExpect: [
      "A detailed history and examination of the face, jaws and mouth.",
      "Review of X-rays or scans, with further imaging advised only if needed.",
      "Discussion of treatment pathways, timelines and follow-up.",
      "Coordination with your dentist or physician where relevant.",
    ],
    faqs: [
      {
        q: "Do I need a referral to consult?",
        a: "No. You can request a consultation directly. If another doctor has referred you, bringing their notes and imaging is helpful.",
      },
      {
        q: "Will surgery always be advised?",
        a: "No. Some conditions are best observed or managed without surgery. The consultation will explain which approach fits your case.",
      },
    ],
  },
  "dental-implants": {
    slug: "dental-implants",
    name: "Dental Implant Surgery",
    title: "Dental Implant Surgery in Juhu, Mumbai",
    description:
      "Educational information about dental implant surgical planning and consultation at Oramax Clinic, Juhu Mumbai.",
    intro:
      "Dental implants are artificial tooth roots placed in the jawbone to support replacement teeth. Implant care is a staged process — assessment and planning come first, and suitability depends on bone, gum health and general health.",
    whatIs: [
      "An implant is a small screw-shaped structure placed in the jawbone, which later supports a crown, bridge or denture.",
      "Successful implant treatment depends on careful case selection: adequate bone, healthy gums and control of factors such as smoking or uncontrolled diabetes.",
      "Planning usually involves 3D imaging to assess bone dimensions and the position of nerves and sinuses.",
    ],
    whenRecommended: [
      "A missing tooth where a fixed replacement is being considered",
      "An unstable denture where implant support is being explored",
      "A failing tooth where extraction and later replacement are discussed",
    ],
    whatToExpect: [
      "Consultation and examination of gums, bite and remaining teeth.",
      "Imaging review to assess bone quantity and quality.",
      "An honest discussion of whether implants are suitable — or whether alternatives fit better.",
      "If suitable: a staged plan covering placement, healing time and the final restoration (usually with your restoring dentist).",
    ],
    faqs: [
      {
        q: "Is everyone suitable for implants?",
        a: "No. Bone availability, gum health and certain medical conditions affect suitability. Only an in-person assessment can determine this.",
      },
      {
        q: "How long does implant treatment take?",
        a: "It is typically spread over several months to allow healing between stages. Your individual timeline is discussed at consultation.",
      },
    ],
  },
  "tooth-extraction": {
    slug: "tooth-extraction",
    name: "Tooth Extraction",
    title: "Tooth Extraction in Juhu, Mumbai",
    description:
      "Educational information about planned tooth extraction and consultation at Oramax Clinic, Juhu Mumbai.",
    intro:
      "A tooth extraction is the planned removal of a tooth that cannot be preserved with other treatment. Extractions range from straightforward to surgical, depending on the tooth's position and condition.",
    whatIs: [
      "Extractions are considered when a tooth is severely decayed, fractured, infected or involved in gum disease beyond repair.",
      "Some extractions are simple; others — such as broken roots or impacted teeth — require a surgical approach with gum and bone management.",
      "The decision always weighs preservation first: extraction is advised only when keeping the tooth is not feasible or not in your interest.",
    ],
    whenRecommended: [
      "A tooth with damage or infection that cannot be restored",
      "Advanced gum disease affecting a tooth's support",
      "Orthodontic planning where space creation is advised",
      "A fractured tooth below the gumline",
    ],
    whatToExpect: [
      "Examination and X-ray review to understand root shape and position.",
      "Explanation of the approach, anaesthesia and expected healing time.",
      "The procedure itself under local anaesthesia, with attention to comfort.",
      "Aftercare instructions for bleeding control, diet, hygiene and follow-up.",
    ],
    faqs: [
      {
        q: "What is recovery like?",
        a: "Most people resume routine activities within a day or two, with the socket healing over the following weeks. Detailed aftercare is provided in person.",
      },
      {
        q: "Will I need a replacement afterwards?",
        a: "This depends on the tooth and your bite. Options for replacement — or reasons observation is fine — are discussed at your visit.",
      },
    ],
  },
  "wisdom-teeth": {
    slug: "wisdom-teeth",
    name: "Wisdom Tooth Procedures",
    title: "Wisdom Tooth Assessment in Juhu, Mumbai",
    description:
      "Educational information about wisdom tooth (third molar) assessment and procedures at Oramax Clinic, Juhu Mumbai.",
    intro:
      "Wisdom teeth (third molars) are the last teeth to erupt, often in the late teens or twenties. When there is insufficient space, they can become impacted — and an assessment determines whether observation or removal is wiser.",
    whatIs: [
      "An impacted wisdom tooth is one that cannot erupt normally because of angle, space or obstruction.",
      "Not all wisdom teeth need removal. Teeth that are healthy, functional and cleanable may simply be monitored.",
      "Imaging shows the tooth's angle, depth and relationship to the nerve of the lower jaw — key factors in planning.",
    ],
    whenRecommended: [
      "Repeated pain, swelling or infection near the back of the jaw",
      "Decay or gum disease affecting the wisdom tooth or the tooth beside it",
      "Cysts or changes seen on X-ray around an unerupted tooth",
      "Orthodontic or preventive advice to assess future risk",
    ],
    whatToExpect: [
      "Assessment of symptoms, eruption status and hygiene access.",
      "X-ray review and discussion of whether observation or removal fits your case.",
      "If removal is planned: explanation of anaesthesia, the procedure and healing.",
      "Aftercare covering swelling, diet, mouth opening exercises and review visits.",
    ],
    faqs: [
      {
        q: "Do all wisdom teeth need to be removed?",
        a: "No. The decision depends on symptoms, position, hygiene and imaging. Many wisdom teeth are monitored rather than removed.",
      },
      {
        q: "What is recovery like after removal?",
        a: "Swelling and soreness for a few days are common. You will receive specific aftercare instructions and a follow-up plan.",
      },
    ],
  },
  "surgical-consultation": {
    slug: "surgical-consultation",
    name: "Surgical Consultation",
    title: "Oral & Maxillofacial Consultation in Juhu, Mumbai",
    description:
      "What to expect from a surgical consultation with Dr. Khushal Gangwani at Oramax Clinic, Juhu Mumbai.",
    intro:
      "A surgical consultation is an unhurried first visit: your concern is examined, your imaging is reviewed, and your options are explained clearly — including the option of no immediate treatment.",
    whatIs: [
      "The consultation is a conversation first and an examination second. Understanding your symptoms, history and expectations comes before any recommendation.",
      "Bring previous X-rays, prescriptions and medical details so the assessment is complete and safe.",
      "You will leave with a clear summary: what was found, what the options are, and what each option involves.",
    ],
    whenRecommended: [
      "You have tooth, jaw or facial pain, swelling or numbness",
      "Your dentist has suggested a surgical opinion or extraction",
      "You want a second opinion before a planned procedure",
      "You are considering implants and want a surgical assessment",
    ],
    whatToExpect: [
      "Discussion of your concern, medical history and medicines.",
      "Gentle examination of the mouth, jaws and face.",
      "Review of X-rays or scans you bring; further imaging only if needed.",
      "A written-style summary of findings, options, timelines and costs discussed in person.",
    ],
    faqs: [
      {
        q: "What should I bring?",
        a: "Any X-rays or scans, prescriptions, a list of medicines and medical conditions, and details of previous dental treatment.",
      },
      {
        q: "Will treatment happen on the same day?",
        a: "Usually not. The first visit is for assessment and planning so that any later procedure is safe and well prepared.",
      },
    ],
  },
};
