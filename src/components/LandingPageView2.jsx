import React from "react";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Edit2, Loader2 } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { XIcon } from "@heroicons/react/outline";
import { CiMenuBurger } from "react-icons/ci";

const LandingPageView2 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";
  const [isOpen, setIsOpen] = useState(false);
  
  const leftVariant = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const rightVariant = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const fetchLandingPageData = async () => {
      // const response = await fetchLandingPageByUsername(username);
      const response = {
        artistPage: {
          artistName: "Vishal Mishra",
          stageTitles: "5-Star Performer | Chart-Topping Artist | Voice Artist",
          artistBio:
            "Hello, my name is Vishal Mishra, a passionate musician creating soulful melodies.",
          artistPhoto:
            "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          gradientStart: "#391457",
          gradientEnd: "#000000",
        },
        performances: [
          {
            performanceId: "perf1",
            eventTitle: "Live at Mumbai Arena",
            description: "An acoustic performance for music lovers.",
            ticketPrice: 1499,
            durationMinutes: 120,
            platform: "Stage",
            performanceType: "Team",
          },
          {
            performanceId: "perf2",
            eventTitle: "Melody Night",
            description: "A night of soulful tunes.",
            ticketPrice: 699,
            durationMinutes: 30,
            platform: "Party",
            performanceType: "Solo",
          },
          {
            performanceId: "perf3",
            eventTitle: "Symphony Session",
            description: "A virtual symphony session with fans.",
            ticketPrice: 499,
            durationMinutes: 45,
            platform: "Theater",
            performanceType: "Solo",
          },
        ],
        merchandise: [
          {
            merchId: "merc1",
            merchName: "Signed TShirt + Signed Cup + Signed Vinyl",
            merchDescription: "Limited edition signed merchandise.",
            price: 399,
            merchType: "Exclusive",
            imageURL:
              "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid",
          },
        ],
        songSales: [
          {
            songId: "song1",
            title: "Melody of Dreams",
            priceType: "Variable",
            description:
              "An enchanting melody inspired by the beauty of nature.",
            imageURL:
              "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=1204123&t=1730672058584",
          },
          {
            songId: "song2",
            title: "Echoes of the Heart",
            priceType: "Set",
            price: 100,
            description:
              "A heartfelt ballad that resonates deeply with listeners.",
            imageURL:
              "https://vishal-mishra.com/wp-content/uploads/2024/05/5.jpg",
          },
          {
            songId: "song3",
            title: "Rhythm of the Night",
            priceType: "Set",
            price: 200,
            description: "A vibrant and energetic track perfect for dancing.",
            imageURL:
              "https://vishal-mishra.com/wp-content/uploads/2024/05/1.jpg",
          },
          {
            songId: "song4",
            title: "Journey Within",
            priceType: "Set",
            price: 50,
            description:
              "A soulful piece reflecting the artist's inner journey.",
            imageURL:
              "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg",
          },
        ],
        musicVideos: [
          {
            videoId: "vid1",
            title: "Melodic Memories",
            description: "A visual treat of my recent performance.",
            platform: "YouTube",
            redirectURL: "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            imageURL:
              "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg",
          },
          {
            videoId: "vid2",
            title: "Melodic Memories",
            description: "A visual treat of my recent performance.",
            platform: "YouTube",
            redirectURL: "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            imageURL:
              "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg",
          },
        ],
        fanMessages: {
          title: "Message Vishal Mishra",
          description: "Send me your thoughts or questions.",
          promisedReplyTime: "3",
        },
        supportPage: {
          title: "Show Your Love",
        },
        musicPlatformLinks: [
          {
            musicPlatform: "JioSaavan",
            url: "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_",
            icon: "https://images.sftcdn.net/images/t_app-icon-m/p/4b3bebe9-f429-42cc-89db-2a9493062a5e/2230401414/jiosaavn-logo",
          },
          {
            musicPlatform: "Spotify",
            url: "https://open.spotify.com/artist/5wJ1H6ud777odtZl5gG507",
            icon: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
          },
        ],
      };

      setLandingPageData(response);
      setProfileImage(response.artistPage.artistPhoto);
      
    };
    
    fetchLandingPageData();

  }, [username]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector("#navbar");
    const navbarHeight = navbar.offsetHeight;

    if (section) {
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    } else {
      console.log(`Section with ID ${id} not found`);
    }
  };

  if (!landingPageData) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardContent className="pt-6">
          <div className="text-center">Landing page not found</div>
        </CardContent>
      </Card>
    );
  }

  const {
    artistPage,
    performances,
    merchandise,
    songSales,
    musicVideos,
    fanMessages,
    supportPage,
    musicPlatformLinks,
  } = landingPageData;

  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col items-center pt-24 px-4"
      style={{
        background: `linear-gradient(to right, ${artistPage.gradientStart}, ${artistPage.gradientEnd})`,
      }}
    >
      {/* Navbar Section */}
      <nav id="navbar" className="fixed top-0 w-full z-50">
        <Card className="rounded-none shadow-sm">
          <CardContent className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-xl text-white">@{username}</h2>
              <div className="relative">
                {/* Burger Icon */}
                <div className="p-4 fixed top-0 right-0 z-50 md:hidden">
                  {isOpen ? (
                    <XIcon
                      className="w-8 h-8 text-gray-800 cursor-pointer"
                      onClick={toggleSidebar}
                    />
                  ) : (
                    <CiMenuBurger
                      className="w-8 h-8 text-white cursor-pointer"
                      onClick={toggleSidebar}
                    />
                  )}
                </div>

                {/* Sidebar */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: isOpen ? 0 : "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white/85 shadow-lg z-40 p-6 flex flex-col items-start space-y-4 md:hidden"
                >
                  <h2 className="text-3xl font-bold mb-4 text-dark">Menu</h2>
                  <ul className="space-y-4">
                    <li
                      className="text-lg font-medium text-gray-700 hover:text-light cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToSection("performances");
                      }}
                    >
                      Performances
                    </li>
                    <li
                      className="text-lg font-medium text-gray-700 hover:text-light cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToSection("videos");
                      }}
                    >
                      Videos
                    </li>
                    <li
                      className="text-lg font-medium text-gray-700 hover:text-light cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToSection("songsSale");
                      }}
                    >
                      Songs Sales
                    </li>
                    <li
                      className="text-lg font-medium text-gray-700 hover:text-light cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToSection("merchandise");
                      }}
                    >
                      Merchandise
                    </li>
                    <li
                      className="text-lg font-medium text-gray-700 hover:text-light cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToSection("messages");
                      }}
                    >
                      Messages
                    </li>
                    <li
                      className="text-lg font-medium text-gray-700 hover:text-light cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToSection("support");
                      }}
                    >
                      Support
                    </li>
                  </ul>
                </motion.div>
              </div>
              <Tabs>
                <TabsList className="hidden md:flex">
                  <TabsTrigger
                    value="performances"
                    onClick={() => scrollToSection("performances")}
                  >
                    Performances
                  </TabsTrigger>
                  <TabsTrigger
                    value="videos"
                    onClick={() => scrollToSection("videos")}
                  >
                    Videos
                  </TabsTrigger>
                  <TabsTrigger
                    value="songsSale"
                    onClick={() => scrollToSection("songsSale")}
                  >
                    Songs Sale
                  </TabsTrigger>
                  <TabsTrigger
                    value="merchandise"
                    onClick={() => scrollToSection("merchandise")}
                  >
                    Merchandise
                  </TabsTrigger>
                  <TabsTrigger
                    value="fanMessages"
                    onClick={() => scrollToSection("messages")}
                  >
                    Messages
                  </TabsTrigger>
                  <TabsTrigger
                    value="support"
                    onClick={() => scrollToSection("support")}
                  >
                    Support
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardContent>
        </Card>
      </nav>

      {/* Main Content Container */}
      <div className="w-full max-w-3xl space-y-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <motion.div className="flex flex-col items-center" initial="hidden"
            animate="visible"
            variants={leftVariant}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}>
            <Avatar className="w-48 h-48 mb-4">
              <AvatarImage
                src={profileImage || "/default-avatar.jpg"}
                alt="Profile"
              />
              <AvatarFallback>{username}</AvatarFallback>
            </Avatar>

            <h2 className="text-3xl font-bold text-white">
              {artistPage.artistName}
            </h2>
            <Badge
              variant="secondary"
              className="hover:bg-light mt-2 p-2 px-3 bg-white/50"
            >
              {artistPage.stageTitles}
            </Badge>
          </motion.div>

          {/* Social Links Section */}
          <motion.div className="mt-6 flex flex-col flex-wrap justify-center gap-4" initial="hidden"
            animate="visible"
            variants={rightVariant}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}>
            {musicPlatformLinks.map((link) => (
              <button
                key={link.musicPlatform + link.url}
                className="flex text-white items-center p-2 border border-gray-300 rounded-full shadow-md hover:bg-light transition"
                onClick={() => link.url && window.open(link.url, "_blank")}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 mr-2">
                  {link.icon ? (
                    <img
                      src={link.icon}
                      alt={`${link.musicPlatform} icon`}
                      className="w-12 h-12 object-cover rounded-full "
                    />
                  ) : null}
                </div>
                <span
                  className={`text-sm font-medium ${
                    link.musicPlatform ? "" : "opacity-50"
                  }`}
                >
                  {link.musicPlatform || " "}
                </span>
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-8"
          initial="hidden"
          animate="visible"
          variants={rightVariant}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        >
          {/* About Section */}
          <motion.div
           initial={{ opacity: 0 }}
           whileInView={{
             opacity: 1,
             transition: {
               type: "spring",
               stiffness:50,
               damping:15,
               duration: 2,
             },
           }}
          >
            <Card>
              <CardHeader>
                <motion.div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <CardTitle>About</CardTitle>
                </motion.div>

                <CardDescription className="p-1">
                  {artistPage.artistBio}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Music Videos Section */}
          <motion.div
            id="videos"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                stiffness:50,
                damping:15,
                duration: 2,
              },
            }}
          >
            <Card className="mt-8">
              <CardHeader>
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                    />
                  </svg>

                  <CardTitle>Music Videos</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {musicVideos.map((video) => (
                    <Card
                      key={video.videoId}
                      className="overflow-hidden cursor-pointer w-full transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-200 duration-300"
                      onClick={() => window.open(video.redirectURL, "_blank")}
                    >
                      <div className="relative">
                        {/* Image with a 3:2 aspect ratio */}
                        <div
                          className="w-full"
                          style={{
                            paddingTop: "66.66%" /* 2/3 for 3:2 aspect ratio */,
                          }}
                        >
                          <img
                            src={video.imageURL} // Assuming imageUrl is the field containing the image URL
                            alt={video.title}
                            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
                          />
                        </div>

                        {/* Text content below the image */}
                        <div className="p-3 bg-white/50 backdrop-blur-sm flex justify-between items-center">
                          <span className="font-medium">{video.title}</span>
                          <Button variant="ghost" size="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                              />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Scrollable Sections */}
          <ScrollArea className="">
            {/* Performances Section */}
            <motion.div
              id="performances"
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness:50,
                  damping:15,
                  duration: 2,
                },
              }}
            >
              <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-lg mb-8">
                <div className="flex gap-2 justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-white mt-1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                    />
                  </svg>

                  <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Performances
                  </h2>
                </div>

                {performances.map((perf) => (
                  <Card key={perf.performanceId} className="mb-4">
                    <CardHeader>
                      <CardTitle className="text-dark font-semibold">
                        {perf.eventTitle}
                      </CardTitle>
                      <CardDescription>
                        {perf.description}
                        <br />
                        Duration: {perf.durationMinutes} mins
                        <br />
                        Location: {perf.platform}
                        <br />
                        Price: ${perf.ticketPrice}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="mt-2">Book Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Songs sales Section */}
            <motion.div
              id="songsSale"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness:50,
                  damping:15,
                  duration: 2,
                },
              }}
            >
              <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-lg mb-8">
                <div className="flex justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-white mt-1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Songs for Sale
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {songSales.map((song) => (
                    <div
                      key={song.songId}
                      className="bg-white/20 bg-opacity-90 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                      {/* Image Section */}
                      <div className="h-48">
                        <img
                          src={song.imageURL} // Ensure each song object includes an `imageURL` property
                          alt={song.title}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="p-4 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl text-white font-bold mb-2">
                            {song.title}
                          </h3>
                          <p className="text-sm text-white">
                            {song.description}
                            <br />
                            Pricing: {song.priceType}
                            {song.price && ` - $${song.price}`}
                          </p>
                        </div>
                        <button
                          className="mt-4 w-full px-4 py-2 text-white bg-dark hover:bg-light 
                            rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
                        >
                          View Songs
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Merchandise Section */}
            <motion.div
              id="merchandise"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness:50,
                  damping:15,
                  duration: 2,
                },
              }}
            >
              <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-2xl mb-8">
                <div className="flex justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-white mt-1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <h2
                    className="text-3xl font-bold text-center text-white 
                  mb-6"
                  >
                    Merchandise
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {merchandise.map((merc) => (
                    <div
                      key={merc.merchId}
                      className="bg-white/20 bg-opacity-90 rounded-2xl shadow-lg overflow-hidden flex flex-col"
                    >
                      {/* Image Section */}
                      <div className="h-48">
                        <img
                          src={merc.imageURL} // Ensure each merchandise object includes an `imageURL` property
                          alt={merc.merchName}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="p-4 flex-grow flex flex-col justify-between ">
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white">
                            {merc.merchName}
                          </h3>
                          <p className="text-sm text-white">
                            {merc.merchDescription}
                            <br />
                            Price: ${merc.price}
                            <br />
                            Type: {merc.merchType}
                          </p>
                        </div>
                        <button className="mt-4 w-full px-4 py-2 text-white bg-dark hover:bg-light  rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
                          View Bundle
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Messages Section */}
            <motion.div
              id="messages"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness:50,
                  damping:15,
                  duration: 2,
                },
              }}
            >
              {fanMessages && (
                <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-2xl mb-8">
                  <div className="flex justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-7 text-white mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                      />
                    </svg>

                    <h2 className="text-3xl font-bold text-center text-white mb-6">
                      Fan Messages
                    </h2>
                  </div>

                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle>Message Me</CardTitle>
                      <CardDescription>
                        {fanMessages.title}
                        <br />
                        {fanMessages.description}
                        <br />
                        Promised Reply Time: {
                          fanMessages.promisedReplyTime
                        }{" "}
                        hours
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button>Send Message</Button>
                    </CardContent>
                  </Card>
                </div>
              )}
            </motion.div>
            {/* Support Section */}
            <motion.div
              id="support"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness:50,
                  damping:15,
                  duration: 2,
                },
              }}
            >
              {supportPage && (
                <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Support Me
                  </h2>

                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle>Support</CardTitle>
                      <CardDescription>{supportPage.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button>Support</Button>
                    </CardContent>
                  </Card>
                </div>
              )}
            </motion.div>
          </ScrollArea>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPageView2;
