import { RideShare } from "./assets/ImagePath";

const projectConstants = {
    name: "Md. Shaheduzzaman",
    title: "React Native Developer",
    avatar: "https://avatars.githubusercontent.com/u/77052145?s=96&v=4",
    description: "I'm a React Native Developer with 2+ years of experience. I specialize in building high-quality mobile applications using React Native. I have a strong background in JavaScript, React Native, and related technologies. I'm passionate about creating intuitive and user-friendly mobile applications that deliver exceptional user experiences.",
    email: "physics.shahedzaman@gmail.com",
    linkedin: "https://www.linkedin.com/in/md-shaheduzzaman/",
    github: "https://github.com/shahedzaman-web",
    phone: "+880 1786 233 560",
    address: "Dhaka, Bangladesh",
    whatsapp: "https://wa.me/8801786233560",
    featuredProjects: [
        {
            "id": 1,
            "title": "Vella Laser Care",
            "description": "Vella Laser Care is a comprehensive beauty and skincare app offering a range of laser treatments and skincare solutions. The app provides detailed information about various procedures, helps users book appointments, and offers tips for maintaining healthy skin.",
            "image": "https://images.unsplash.com/photo-1602037299890-c593f4c81d47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "links": {
                "play": "https://play.google.com/store/apps/details?id=com.vellalasercarebd"
            },
            "tags": ["Android", "Beauty", "Skincare", "Laser Treatments"]
        },
        {
            id: 2,
            title: "Freelly",
            description: "Freelly is a bikepool and carpool mobile application that connects users for shared rides. It helps reduce traffic congestion and promotes eco-friendly transportation.",
            image: RideShare,  // Replace with the actual Unsplash image link
            links: {
                apple: "https://apps.apple.com/us/app/freelly-bikepool-carpool/id6476261777",
                play: "https://play.google.com/store/apps/details?id=com.freellyapp",
            },
            tags: ["Android", "iOS", "Transportation", "Carpool", "Bikepool"]
        },
    ]
    ,
    projectList: [
        {
            id: 1,
            title: "Admissions Assist",
            description: "Admissions Assist is a comprehensive mobile application that simplifies the college admissions process. It provides students with resources and tools to research colleges, track application deadlines, and submit applications.",
            image: "https://images.unsplash.com/20/cambridge.JPG?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Replace with the actual Unsplash image link
            links: {
                apple: "https://apps.apple.com/us/app/admissions-assist/id6478013507",
                play: "https://play.google.com/store/apps/details?id=com.admissionsassist",
            },
            github: "https://github.com/developer/admissions-assist", // Hypothetical link
            live: "https://play.google.com/store/apps/details?id=com.admissionsassist",
            tags: ["Android", "Education", "Admissions", "College", "Tracking"]
        },
        {
            id: 2,
            title: "Freelly",
            description: "Freelly is a bikepool and carpool mobile application that connects users for shared rides. It helps reduce traffic congestion and promotes eco-friendly transportation.",
            image: RideShare,  // Replace with the actual Unsplash image link
            links: {
                apple: "https://apps.apple.com/us/app/freelly-bikepool-carpool/id6476261777",
                play: "https://play.google.com/store/apps/details?id=com.freellyapp",
            },
            tags: ["Android", "iOS", "Transportation", "Carpool", "Bikepool"]
        },
        {
            id: 3,
            title: "MoodSinger",
            description: "MoodSinger is an app that suggests songs based on your mood. It uses advanced algorithms to match your current feelings with the perfect playlist.",
            image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29",  // Replace with the actual Unsplash image link
            links: {
                play: "https://play.google.com/store/apps/details?id=com.moodsinger.app",
            },
            tags: ["Android", "Music", "Mood", "Playlist"]
        },
        {
            id: 4,
            title: "Foodmoodbd",
            description: "Foodmoodbd is an all-in-one food delivery app connecting users with restaurants and delivery riders. It ensures quick and efficient delivery of your favorite meals.",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",  // Replace with the actual Unsplash image link
            links: {
                apple: "https://apps.apple.com/us/app/foodmoodbd/id6447767675",
                play: "https://play.google.com/store/apps/details?id=com.foodmoodbd",
                rider: "https://play.google.com/store/apps/details?id=dev.foodmod.rider",
                restaurant: "https://play.google.com/store/apps/details?id=dev.foodmod.restaurant",
            },
            tags: ["Android", "iOS", "Food Delivery", "Restaurant", "Rider"]
        },
        {
            id: 5,
            title: "St Joseph",
            description: "St Joseph is a comprehensive app designed for the St Joseph community, offering resources, updates, and information for students and parents.",
            image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Replace with the actual Unsplash image link
            links: {
                play: "https://play.google.com/store/apps/details?id=com.stJoseph",
            },
            tags: ["Android", "Community", "Education", "Updates"]
        },
        {
            id: 6,
            title: "Rubbish Renegade",
            description: "Rubbish Renegade is a waste management app that helps users track and manage their waste disposal schedules. It promotes responsible waste management practices.",
            image: "https://images.unsplash.com/photo-1505577058444-a3dab90d4253",  // Replace with the actual Unsplash image link
            links: {
                apple: "https://apps.apple.com/us/app/rubbish-renegade/id6468367213",
                play: "https://play.google.com/store/apps/details?id=com.garbage.bobuba",
            },
            tags: ["Android", "iOS", "Waste Management", "Environment"]
        },
        {
            id: 7,
            title: "Wakei",
            description: "Wakei is a fun and engaging app for youth groups, offering a variety of interactive games and activities to keep everyone entertained.",
            image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0",  // Replace with the actual Unsplash image link
            links: {
                apple: "https://apps.apple.com/us/app/wacki-fun-youth-group-games/id1511377726",
                play: "https://play.google.com/store/apps/details?id=com.wackiapp",
            },
            tags: ["Android", "iOS", "Youth", "Games", "Activities"]
        },
        {
            id: 8,
            title: "Tguid",
            description: "Tguid is a travel guide app that provides users with detailed information about destinations, attractions, and travel tips.",
            image: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Replace with the actual Unsplash image link
            links: {
                apple: "https://play.google.com/store/apps/details?id=com.trustguid&pli=1",
                play: "https://play.google.com/store/apps/details?id=com.trustguid&pli=1",
            },
            tags: ["Android", "iOS", "Travel", "Guide", "Attractions"]
        },
        {
            id: 9,
            title: "Sohoj Pora",
            description: "Sohoj Pora is an educational app designed to make learning easy and accessible for students. It offers a variety of educational resources and interactive lessons.",
            image: "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Replace with the actual Unsplash image link
            links: {
                play: "https://play.google.com/store/apps/details?id=com.sohojporaa",
            },
            tags: ["Android", "Education", "Learning", "Interactive"]
        },
        {
            "id": 10,
            "title": "Vella Laser Care",
            "description": "Vella Laser Care is a comprehensive beauty and skincare app offering a range of laser treatments and skincare solutions. The app provides detailed information about various procedures, helps users book appointments, and offers tips for maintaining healthy skin.",
            "image": "https://images.unsplash.com/photo-1602037299890-c593f4c81d47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "links": {
                "play": "https://play.google.com/store/apps/details?id=com.vellalasercarebd"
            },
            "tags": ["Android", "Beauty", "Skincare", "Laser Treatments"]
        }

    ]
    ,
    skills: [
        {
            id: 1,
            name: "Mobile Development",
            tags: ["React Native", "Expo", "Redux", "Firebase", "Stripe"]
        },
        {
            id: 2,
            name: "Web Development",
            tags: ["React", "Next.js", "Redux", "Firebase", "Stripe", "Laravel"]
        },
        {
            id: 3,
            name: "Programming Languages",
            tags: ["JavaScript", "TypeScript", "Php", "C", "C++"]
        },
        {
            id: 4,
            name: "Database",
            tags: ["MongoDB", "Firebase", "MySQL",]
        },
        {
            id: 5,
            name: "Backend Development",
            tags: ["Node.js", "Express.js", "MongoDB", "Firebase", "Stripe", "Prisma", "Laravel"]
        },
        {
            id: 5,
            name: "Tools",
            tags: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Reaction", "Flipper", "Android Studio", "Xcode"]
        },
    ], experiences: [
        {
            position: "Mobile & Backend Engineer",
            company: "TrustGuid (Australia)",
            date: "September 2024 - Present",
            description: "Responsible for both mobile and backend engineering tasks, fulfilling the duties outlined by the Company. Work independently, completing tasks and projects according to the schedules and expectations set by the Company. Utilize React Native to create native-like mobile applications for both iOS and Android platforms. Build efficient and interactive web interfaces. Leverage Node.js to develop scalable and performant backend services.",
            tags: ["React Native", "Node.js", "iOS", "Android", "Web Interfaces"]
        },
        {
            position: "Full Stack React Native Developer",
            company: "Centara Tech Venture Ltd",
            date: "November 2023 - August 2024",
            description: "Developing new user-facing features using React.js. Building reusable components and front-end libraries for future use. Translating designs and wireframes into high-quality code.",
            tags: ["React Native", "React.js", "Front-end Libraries", "Designs", "Wireframes"]
        },

    ],

}
export default projectConstants;