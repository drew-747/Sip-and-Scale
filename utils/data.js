// Data for Sip & Scale website

function getEventCities() {
  return [
  {
    id: 1,
    name: "Manila",
    country: "Philippines",
    status: "active",
    image: "https://placehold.co/800x600/5E17EB/FFFFFF?text=Manila",
    attendees: 45
  },
  {
    id: 2,
    name: "Cebu",
    country: "Philippines",
    status: "active",
    image: "https://placehold.co/800x600/5E17EB/FFFFFF?text=Cebu",
    attendees: 38
  },
  {
    id: 3,
    name: "Davao",
    country: "Philippines",
    status: "active",
    image: "https://placehold.co/800x600/5E17EB/FFFFFF?text=Davao",
    attendees: 32
  },
  {
    id: 4,
    name: "Singapore",
    country: "Singapore",
    status: "active",
    image: "https://placehold.co/800x600/5E17EB/FFFFFF?text=Singapore",
    attendees: 30
  },
  {
    id: 5,
    name: "Kuala Lumpur",
    country: "Malaysia",
    status: "active",
    image: "https://placehold.co/800x600/5E17EB/FFFFFF?text=Kuala+Lumpur",
    attendees: 25
  },
  {
    id: 6,
    name: "Bangalore",
    country: "India",
    status: "active",
    image: "https://placehold.co/800x600/5E17EB/FFFFFF?text=Bangalore",
    attendees: 35
  },
  {
    id: 7,
    name: "Delhi",
    country: "India",
    status: "active",
    image: "https://placehold.co/800x600/5E17EB/FFFFFF?text=Delhi",
    attendees: 28
  },
  {
    id: 8,
    name: "Chennai",
    country: "India",
    status: "active",
    image: "https://placehold.co/800x600/5E17EB/FFFFFF?text=Chennai",
    attendees: 27
  },
  {
    id: 9,
    name: "New York",
    country: "USA",
    status: "active",
    image: "https://placehold.co/800x600/5E17EB/FFFFFF?text=New+York",
    attendees: 40
  },
  {
    id: 10,
    name: "Ottawa",
    country: "Canada",
    status: "active",
    image: "https://placehold.co/800x600/5E17EB/FFFFFF?text=Ottawa",
    attendees: 22
  },
  {
    id: 11,
    name: "Helsinki",
    country: "Finland",
    status: "upcoming",
    image: "https://placehold.co/800x600/5E17EB/FFFFFF?text=Helsinki",
    attendees: 0
  }];

}

function getUpcomingEvents() {
  return [
  {
    id: 1,
    city: "Helsinki",
    country: "Finland",
    date: "June 15, 2024",
    time: "7:00 PM",
    venue: "Restaurant Savotta",
    status: "upcoming",
    capacity: 30,
    availableSpots: 30,
    image: "https://placehold.co/800x600/5E17EB/FFFFFF?text=Helsinki"
  },
  {
    id: 2,
    city: "Manila",
    country: "Philippines",
    date: "May 27, 2024",
    time: "6:30 PM",
    venue: "Blackbird at the Nielson Tower",
    status: "upcoming",
    capacity: 40,
    availableSpots: 12,
    image: "https://placehold.co/800x600/5E17EB/FFFFFF?text=Manila"
  },
  {
    id: 3,
    city: "Singapore",
    country: "Singapore",
    date: "June 3, 2024",
    time: "7:00 PM",
    venue: "Potato Head Singapore",
    status: "upcoming",
    capacity: 35,
    availableSpots: 8,
    image: "https://placehold.co/800x600/5E17EB/FFFFFF?text=Singapore"
  },
  {
    id: 4,
    city: "New York",
    country: "USA",
    date: "June 10, 2024",
    time: "7:30 PM",
    venue: "The Smith - Nomad",
    status: "upcoming",
    capacity: 40,
    availableSpots: 15,
    image: "https://placehold.co/800x600/5E17EB/FFFFFF?text=New+York"
  }];

}

function getTestimonials() {
  return [
  {
    id: 1,
    name: "Maria Rodriguez",
    role: "Founder, TechStart",
    image: "https://placehold.co/256x256/FF6B6B/FFFFFF?text=Maria",
    quote: "Sip & Scale created an environment where I could genuinely connect with other founders without the pressure of a formal networking event. I've formed lasting partnerships from just one dinner!"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Engineering Lead, Google",
    image: "https://placehold.co/256x256/5E17EB/FFFFFF?text=David",
    quote: "The conversations I had at Sip & Scale were refreshingly authentic. It wasn't about pitching or business cards—it was about making real connections with brilliant minds."
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "CS Student, Stanford",
    image: "https://placehold.co/256x256/FFD166/FFFFFF?text=Aisha",
    quote: "As a student, Sip & Scale gave me direct access to founders and industry professionals in a casual setting. I landed my internship through a connection I made at one of their dinners!"
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Product Manager, Canva",
    image: "https://placehold.co/256x256/FF6B6B/FFFFFF?text=Michael",
    quote: "The intimate setting at Sip & Scale dinners creates the perfect environment for meaningful conversations. It's networking without feeling like you're networking."
  }];

}

function getStats() {
  return {
    cities: 12,
    countries: 6,
    totalAttendees: 300,
    partnerships: 15
  };
}