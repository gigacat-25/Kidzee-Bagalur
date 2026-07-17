/**
 * Curated high-resolution photorealistic AI classroom photography & campus assets.
 */

export interface GalleryPhoto {
  url: string;
  thumb: string;
  title: string;
  category: string;
  orientation?: "landscape" | "portrait" | string;
}

export const IMAGES = {
  // Hero section image (Kidzee uniform branded realistic photo)
  hero: "/images/kidzee_hero_kids.png",

  // About Section photo (Realistic teacher & children photography)
  about: "/images/nurturing_kid.png",

  // Program images (High-resolution photorealistic AI classroom photography for each program)
  programs: {
    playgroup: "/images/playgroup.png",
    nursery: "/images/nursery.png",
    juniorKg: "/images/kindergarten.png",
    seniorKg: "/images/senior_kg.png",
    daycare: "/images/daycare_teacher.png",
  },

  // Daycare banner split section image (Teacher in green saree playing shape-sorter blocks with toddlers)
  daycareTeacher: "/images/daycare_teacher.png",

  // Why choose cards / Facilities (Photorealistic AI classroom photography)
  whyChoose: {
    illume: "/images/why_illume.png",
    educator: "/images/nursery.png",
    safe: "/images/safe_environment.png",
    confidence: "/images/confidence.png",
  },

  // Gallery grid displaying 20 100% unique, distinct authentic Kidzee KIADB Bagalur campus photos
  gallery: [
    {
      url: "/photos/photo_01.jpg",
      thumb: "/photos/thumbs/photo_01.jpg",
      title: "Kidzee Mascot & Welcome Wall",
      category: "Campus Life",
      orientation: "portrait"
    },
    {
      url: "/photos/photo_02.jpg",
      thumb: "/photos/thumbs/photo_02.jpg",
      title: "Kidzee Campus Entrance & Welcome",
      category: "Campus Life",
      orientation: "landscape"
    },
    {
      url: "/photos/photo_04.jpg",
      thumb: "/photos/thumbs/photo_04.jpg",
      title: "Building Blocks & Motor Skills",
      category: "Activities",
      orientation: "portrait"
    },
    {
      url: "/photos/photo_07.jpg",
      thumb: "/photos/thumbs/photo_07.jpg",
      title: "Interactive Toy & Puzzle Zone",
      category: "Activities",
      orientation: "portrait"
    },
    {
      url: "/photos/photo_09.jpg",
      thumb: "/photos/thumbs/photo_09.jpg",
      title: "Early Childhood Learning Desk",
      category: "Classroom",
      orientation: "portrait"
    },
    {
      url: "/photos/photo_11.jpg",
      thumb: "/photos/thumbs/photo_11.jpg",
      title: "Phonics & Language Skill Wall",
      category: "Learning",
      orientation: "portrait"
    },
    {
      url: "/photos/photo_12.jpg",
      thumb: "/photos/thumbs/photo_12.jpg",
      title: "Creative Arts & Craft Corner",
      category: "Activities",
      orientation: "portrait"
    },
    {
      url: "/photos/photo_14.jpg",
      thumb: "/photos/thumbs/photo_14.jpg",
      title: "Maths & Number Fun Desk",
      category: "Learning",
      orientation: "portrait"
    },
    {
      url: "/photos/photo_15.jpg",
      thumb: "/photos/thumbs/photo_15.jpg",
      title: "Montessori Sensory Equipment",
      category: "Learning",
      orientation: "portrait"
    },
    {
      url: "/photos/photo_17.jpg",
      thumb: "/photos/thumbs/photo_17.jpg",
      title: "Fine Motor Skills & Drawing",
      category: "Activities",
      orientation: "portrait"
    },
    {
      url: "/photos/photo_20.jpg",
      thumb: "/photos/thumbs/photo_20.jpg",
      title: "Kidzee Library & Story Books",
      category: "Learning",
      orientation: "portrait"
    },
    {
      url: "/photos/photo_21.jpg",
      thumb: "/photos/thumbs/photo_21.jpg",
      title: "Supervised Daycare Play Area",
      category: "Daycare",
      orientation: "landscape"
    },
    {
      url: "/photos/photo_23.jpg",
      thumb: "/photos/thumbs/photo_23.jpg",
      title: "Nurturing Teacher Guidance",
      category: "Campus Life",
      orientation: "landscape"
    },
    {
      url: "/photos/photo_25.jpg",
      thumb: "/photos/thumbs/photo_25.jpg",
      title: "Outdoor Play & Sports Zone",
      category: "Outdoors",
      orientation: "landscape"
    },
    {
      url: "/photos/photo_26.jpg",
      thumb: "/photos/thumbs/photo_26.jpg",
      title: "Physical Activity & Balance Fun",
      category: "Outdoors",
      orientation: "portrait"
    },
    {
      url: "/photos/photo_28.jpg",
      thumb: "/photos/thumbs/photo_28.jpg",
      title: "Bright & Child-Friendly Classroom",
      category: "Classroom",
      orientation: "landscape"
    },
    {
      url: "/photos/photo_29.jpg",
      thumb: "/photos/thumbs/photo_29.jpg",
      title: "Celebration & Event Decorations",
      category: "Events",
      orientation: "portrait"
    },
    {
      url: "/photos/photo_31.jpg",
      thumb: "/photos/thumbs/photo_31.jpg",
      title: "Festive Campus Celebrations",
      category: "Events",
      orientation: "portrait"
    },
    {
      url: "/photos/photo_32.jpg",
      thumb: "/photos/thumbs/photo_32.jpg",
      title: "Safe & Sanitized Activity Space",
      category: "Campus Life",
      orientation: "landscape"
    },
    {
      url: "/photos/photo_51.jpg",
      thumb: "/photos/thumbs/photo_51.jpg",
      title: "Fun Time with Friends",
      category: "Campus Life",
      orientation: "portrait"
    }
  ] as GalleryPhoto[]
};
