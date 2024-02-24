import {
  AddToBag,
  ContactUs,
  CreateAccount,
  HotelBooking,
  ImageCarousel,
  MobileNavigation,
  MusicEvents,
  PasswordGenerator,
  ProfileCard,
  Recipe,
  RestaurantReservation,
  SignUp,
} from "./challenges/solutions";
import { TaskBoard } from "./challenges/solutions/TaskBoard";

export const challenges = [
  { day: 1, title: "Profile Card", solution: ProfileCard },
  { day: 2, title: "Add To Bag", solution: AddToBag },
  { day: 3, title: "Mobile Navigation", solution: MobileNavigation },
  { day: 4, title: "Contact Us", solution: ContactUs },
  { day: 5, title: "Recipe", solution: Recipe },
  { day: 6, title: "Image Carousel", solution: ImageCarousel },
  { day: 7, title: "Create Account", solution: CreateAccount },
  { day: 8, title: "Music events", solution: MusicEvents },
  { day: 9, title: "Password generator", solution: PasswordGenerator },
  { day: 10, title: "SignUp", solution: SignUp },
  { day: 11, title: "Hotel Booking", solution: HotelBooking },
  { day: 12, title: "Restaurant Reservation", solution: RestaurantReservation },
  { day: 13, title: "Task Board", solution: TaskBoard },
];
