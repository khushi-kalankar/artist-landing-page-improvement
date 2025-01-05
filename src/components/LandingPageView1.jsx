
import React from 'react';
import { useEffect, useState } from "react";
import { Edit2, Loader2 } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const LandingPageView1 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";

  useEffect(() => {
    const fetchLandingPageData = async () => {

      const response =
      {
        "artistPage": {
          "artistName": "Vishal Mishra",
          "stageTitles": "5-Star Performer | Chart-Topping Artist | Voice Artist",
          "artistBio": "Hello, my name is Vishal Mishra, a passionate musician creating soulful melodies.",
          "artistPhoto": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          "gradientStart": "#391457",
          "gradientEnd": "#000000"
        },
        "performances": [
          {
            "performanceId": "perf1",
            "eventTitle": "Live at Mumbai Arena",
            "description": "An acoustic performance for music lovers.",
            "ticketPrice": 1499,
            "durationMinutes": 120,
            "platform": "Stage",
            "performanceType": "Team"
          },
          {
            "performanceId": "perf2",
            "eventTitle": "Melody Night",
            "description": "A night of soulful tunes.",
            "ticketPrice": 699,
            "durationMinutes": 30,
            "platform": "Party",
            "performanceType": "Solo"
          },
          {
            "performanceId": "perf3",
            "eventTitle": "Symphony Session",
            "description": "A virtual symphony session with fans.",
            "ticketPrice": 499,
            "durationMinutes": 45,
            "platform": "Theater",
            "performanceType": "Solo"
          }
        ],
        "merchandise": [
          {
            "merchId": "merc1",
            "merchName": "Signed TShirt + Signed Cup + Signed Vinyl",
            "merchDescription": "Limited edition signed merchandise.",
            "price": 399,
            "merchType": "Exclusive",
            "imageURL": "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid"
          }
        ],
        "songSales": [
          {
            "songId": "song1",
            "title": "Melody of Dreams",
            "priceType": "Variable",
            "description": "An enchanting melody inspired by the beauty of nature.",
            "imageURL": "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=1204123&t=1730672058584"
          },
          {
            "songId": "song2",
            "title": "Echoes of the Heart",
            "priceType": "Set",
            "price": 100,
            "description": "A heartfelt ballad that resonates deeply with listeners.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/5.jpg"
          },
          {
            "songId": "song3",
            "title": "Rhythm of the Night",
            "priceType": "Set",
            "price": 200,
            "description": "A vibrant and energetic track perfect for dancing.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/1.jpg"
          },
          {
            "songId": "song4",
            "title": "Journey Within",
            "priceType": "Set",
            "price": 50,
            "description": "A soulful piece reflecting the artist's inner journey.",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          }
        ],
        "musicVideos": [
          {
            "videoId": "vid1",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          },
          {
            "videoId": "vid2",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg"
          },
        ],
        "fanMessages": {
          "title": "Message Vishal Mishra",
          "description": "Send me your thoughts or questions.",
          "promisedReplyTime": "3"
        },
        "supportPage": {
          "title": "Show Your Love"
        },
        "musicPlatformLinks": [
          {
            "musicPlatform": "JioSaavan",
            "url": "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_",
            "icon": "https://images.sftcdn.net/images/t_app-icon-m/p/4b3bebe9-f429-42cc-89db-2a9493062a5e/2230401414/jiosaavn-logo"
          },
          {
            "musicPlatform": "Spotify",
            "url": "https://open.spotify.com/artist/5wJ1H6ud777odtZl5gG507",
            "icon": "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
          }
        ]
      }

      setLandingPageData(response);
      setProfileImage(response.artistPage.artistPhoto);

    };
    fetchLandingPageData();
  }, [username]);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.offsetHeight;

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
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

  const { artistPage, performances, merchandise, songSales, musicVideos, fanMessages, supportPage, musicPlatformLinks } = landingPageData;



  return (
    <div className="min-h-screen bg-gray-50" style={{
      background: `linear-gradient(to right, ${artistPage.gradientStart}, ${artistPage.gradientEnd})`
    }}>
      {/* Navbar Section */}
      <nav id="navbar" className="fixed top-0 w-full z-50 ">
        <Card className="rounded-none shadow-sm">
          <CardContent className="max-w-6xl mx-auto px-4 py-4 ">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-xl text-white">@{username}</h2>
              <Tabs>
                <TabsList className="hidden md:flex">
                  <TabsTrigger
                    value="performances"
                    onClick={() => scrollToSection('performances')}
                  >
                    Performances
                  </TabsTrigger>
                  <TabsTrigger
                    value="videos"
                    onClick={() => scrollToSection('videos')}
                  >
                    Videos
                  </TabsTrigger>
                  <TabsTrigger
                    value="songsSale"
                    onClick={() => scrollToSection('songsSale')}
                  >
                    Songs Sale
                  </TabsTrigger>
                  <TabsTrigger
                    value="merchandise"
                    onClick={() => scrollToSection('merchandise')}
                  >
                    Merchandise
                  </TabsTrigger>
                  <TabsTrigger
                    value="fanMessages"
                    onClick={() => scrollToSection('messages')}
                  >
                    Messages
                  </TabsTrigger>
                  <TabsTrigger
                    value="support"
                    onClick={() => scrollToSection('support')}
                  >
                    Support
                  </TabsTrigger>
                </TabsList>
              </Tabs>

            </div>
          </CardContent>
        </Card>
      </nav>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 pt-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div
            className="lg:col-span-4 lg:sticky lg:top-[100px] lg:h-[calc(100vh-100px)] overflow-auto"
            style={{ overflow: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Profile Section */}
            <Card>
              <CardContent className="pt-6 rounded-lg">
                <div className="flex flex-col items-center">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={profileImage || "/default-avatar.jpg"} alt="Profile" />
                    <AvatarFallback>{username}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold mt-4 text-white">{artistPage.artistName}</h2>
                  <Badge variant="secondary" className="hover:bg-light mt-2 p-2  shadow-md text-white bg-dark">
                    {artistPage.stageTitles}
                  </Badge>
                </div>

                {/* Social Links Section */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-white">Connect with me on:</h3>

                  <div className="flex flex-col gap-4 ">
                    {musicPlatformLinks.map((link) => (
                      <button
                        key={link.musicPlatform + link.url}
                        className="flex items-center p-2 hover:bg-light rounded-full shadow-md bg-[#391457] transition text-white hover:text-black"
                        onClick={() => link.url && window.open(link.url, '_blank')}
                      >
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 mr-4">
                          {link.icon ? (
                            <img
                              src={link.icon}
                              alt={`${link.musicPlatform} icon`}
                              className="w-14 h-14 object-cover rounded-full"
                            />
                          ) : null}
                        </div>
                        <span className={`text-sm font-medium ${link.musicPlatform ? '' : 'opacity-50'}`}>
                          {link.musicPlatform || ' '}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-8">
            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
                <CardDescription>{artistPage.artistBio}</CardDescription>
              </CardHeader>
            </Card>

            {/* Music Videos Section */}
            <div id="videos">
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Music Videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {musicVideos.map((video) => (
                      <Card
                        key={video.videoId}
                        className="overflow-hidden cursor-pointer w-full"
                        onClick={() => window.open(video.redirectURL, '_blank')}
                      >
                        <div className="relative">
                          {/* Image with a 3:2 aspect ratio */}
                          <div className="w-full" style={{ paddingTop: '66.66%' /* 2/3 for 3:2 aspect ratio */ }}>
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
</svg>

                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                </CardContent>
              </Card>
            </div>


            {/* Scrollable Sections */}
            <ScrollArea className="">


              {/* Performances Section */}
              <div id="performances" className="mt-8">
                <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-center text-white mb-6">Performances</h2>

                  {performances.map((perf) => (
                    <Card key={perf.performanceId} className="mb-4">
                      <CardHeader>
                        <CardTitle>{perf.eventTitle}</CardTitle>
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
                        <Button
                          className="mt-2"
                          
                        >
                          Book Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Songs sales Section */}
              <div id="songsSale">
                <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-center text-white mb-6">Songs for Sale</h2>

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
                            <h3 className="text-xl text-white font-bold mb-2">{song.title}</h3>
                            <p className="text-sm text-white">
                              {song.description}
                              <br />
                              Pricing: {song.priceType}
                              {song.price && ` - $${song.price}`}
                            </p>
                          </div>
                          <button
                            
                            className="mt-4 w-full px-4 py-2 text-white bg-dark hover:bg-light 
                            rounded-full"
                          >
                            View Songs
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


              {/* Merchandise Section */}
              <div id="merchandise">
                <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-2xl mb-8">
                  <h2 className="text-3xl font-bold text-center text-white 
                  mb-6">Merchandise</h2>

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
                            <h3 className="text-xl font-bold mb-2 text-white">{merc.merchName}</h3>
                            <p className="text-sm text-white">
                              {merc.merchDescription}
                              <br />
                              Price: ${merc.price}
                              <br />
                              Type: {merc.merchType}
                            </p>
                          </div>
                          <button
                            
                            className="mt-4 w-full px-4 py-2 text-white bg-dark hover:bg-light  rounded-lg"
                          >
                            View Bundle
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Messages Section */}
              <div id="messages">
                {fanMessages && (
                  <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-2xl mb-8">
                    <h2 className="text-3xl font-bold text-center text-white mb-6">Fan Messages</h2>

                    <Card className="mb-4">
                      <CardHeader>
                        <CardTitle>Message Me</CardTitle>
                        <CardDescription>
                          {fanMessages.title}
                          <br />
                          {fanMessages.description}
                          <br />
                          Promised Reply Time: {fanMessages.promisedReplyTime} hours
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          
                        >
                          Send Message
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
              {/* Support Section */}
              <div id="support">
                {supportPage && (
                  <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-lg mb-8">
                    <h2 className="text-3xl font-bold text-center text-white mb-6">Support Me</h2>

                    <Card className="mb-4">
                      <CardHeader>
                        <CardTitle>Support</CardTitle>
                        <CardDescription>
                          {supportPage.title}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          
                        >
                          Support
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageView1;
