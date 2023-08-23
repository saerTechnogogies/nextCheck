"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CsrBlogDetail({ params }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://api.servicetasker.com/api/v1/blog-detail?Slug=${params?.bdetail}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Blogs Detail data</p>;

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://servicetasker.com.au/blogs/#Organization",
              name: "ServiceTasker",
              url: "https://servicetasker.com.au/",
              sameAs: [
                "https://www.facebook.com/servicetasker/",
                "https://www.instagram.com/servicetasker/",
                "https://www.instagram.com/servicetasker/",
                "https://www.youtube.com/servicetasker",
                "https://www.linkedin.com/company/servicetasker/",
                "https://www.pinterest.com.au/servicetasker/",
                "https://en.wikipedia.org/wiki/servicetasker",
                "https://www.wikidata.org/wiki/Q17000714",
                "https://www.crunchbase.com/organization/servicetasker",
              ],
              logo: {
                "@type": "ImageObject",
                url: "https://www.airtasker.com/blog/wp-content/uploads/2023/01/airtasker-logo.svg",
                width: "148",
                height: "40",
              },
            },
            {
              "@context": "https://schema.org/",
              "@type": "WebPage",
              "@id": `https://servicetasker.com.au/${data?.response?.type}/${data?.response?.slug}/#webpage"`,
              name: data?.response?.title,
              url: `https://servicetasker.com.au/${data?.response?.type}/${data?.response?.slug}/`,
              lastReviewed: "2023-07-20T16:39:27+11:00",
              dateCreated: "2023-07-18T03:41:10+11:00",
              inLanguage: "en-AU",
              description: data?.response?.meta_description,
              reviewedBy: {
                "@type": "Organization",
                name: "ServiceTasker",
                url: `https://servicetasker.com.au/${data?.response?.type}/`,
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/01/airtasker-logo.svg",
                  width: "148",
                  height: "40",
                },
              },
              primaryImageOfPage: {
                "@id": `${data?.response?.thumbnail_photo}/#primaryimage`,
              },
            },
            {
              "@type": "Article",
              "@id": `https://servicetasker.com.au/${data?.response?.type}/${data?.response?.slug}/#Article`,
              url: `https://servicetasker.com.au/${data?.response?.type}/${data?.response?.slug}/`,
              inLanguage: "en-AU",
              mainEntityOfPage: `https://servicetasker.com.au/${data?.response?.type}/${data?.response?.slug}//#webpage`,
              headline: data?.response?.title,
              description: data?.response?.meta_description,
              articleBody:
                "Whether you’re transitioning your boy’s room from a kid’s room to a teenage space, or if your teenage boy has decided he wants a different look for his bedroom, you’ve come to the right place! Depending on what you are after, you can renovate your boy’s room to be modern and classic, which will last for a long time, or you can renovate the room to align with his current interests.    Your best chance at ensuring your teenage boy loves his new space is to include him in the design process. So talk to your teenage boy and check out these 25+ teen boy bedroom ideas for your renovation!  1. Luxurious grey  If you’re looking for a colour to paint your teen boy’s room, grey is a good option. Grey is a neutral colour that can easily complement a variety of styles, allowing for flexibility and personalisation. It also creates a more grown-up atmosphere if the teen transitions from a child’s room to a more mature space.     Image: Andrew Neel on Unsplash  2. Geometric wall  Bring visual interest into your teen’s room by painting a geometric pattern on his wall. Pick a colour that suits his style; then, you can create the room’s theme based on his chosen design.        3. Man cave    If you’re creating a spot for your teenage boy, you want them to feel comfortable and as if it is their very own man cave. You can choose a wallpaper that has a brick or concrete feel, creating a very industrial and trendy backdrop for the bedroom.     Image: nine koepfer on Unsplash  4. Study space  Every teen needs a place to study, and adding a study space to his room would do the trick. You’ll need a desk to put a laptop or desktop computer on, a table lamp, and some storage. If you don’t have too much space to work with, why not incorporate some storage space mounted on the walls?     Image: Zac Gudakov on Unsplash  5. Wardrobe barrier  If you have a large space to work with, separating the bedroom and study area with a wardrobe or cabinet as a barrier would work so well. Separating the two areas ensures that your teens can distinguish between the area for rest and the area for productivity. So that when they are studying, they can concentrate more, and when they are in bed, they will find it much easier to fall asleep.      6. Black on black  Black is a very classy colour and can look great when utilised in a masculine space. Black can be utilised through the bed frame, bedding, bedside drawers, wall paint, and wall-mounted lights. Add a few feature cushions and art to break up all the black and bring some dimension back into the space.      7. Basketball mad  If your teen boy is basketball mad and wants to be the next Kobe or Shaq one day, then this bedroom idea is one for which you should be taking a lot of inspiration! You could consider putting some basketball-inspired wall decals or jerseys on the wall. You can also display his basketball trophies, if any, on a shelf.      8. Playing with textures  Create a teen boy’s bedroom that is super minimal and modern with an edgy touch. Play with different textures that express his style while adding visual interest to the space.      9. Eat, sleep, game  If you have a teenage boy who loves gaming, it may feel like ‘Eat, sleep, game’ are the three things he does the most often. He is bound to love having his gaming corner in his room. If he has some gaming-related posters, neon lights, or wall decals, they will suit this gaming corner well.     Image: Chuck Fortner on Unsplash  10. Natural finishes  Adding natural finishes to the room is definitely for the more mature teenage boy who prefers to stay on trend regarding his decor. You can add a wooden panel wall with neutral colours like white and black. Use crisp white bedding to make the space feel warm and inviting.     Image: Radoslav Bali on Unsplash  11. Touch of blue  Blue is said to impact sleep, regardless of shade, positively. If you want to incorporate that colour into your teenager’s bedroom without overwhelming the space, adding it through small touches such as pillows, blanks, desks, or even a feature wall is the way to go.     Image: Christopher Jolly on Unsplash  12. Make it plaid  A red plaid theme for a teenage boy’s room brings a bold and energetic vibe. The striking combination of red and plaid adds character and style to the space. It’s a versatile choice incorporated through bedding, curtains, or accent pieces, making the room a vibrant and inviting haven for a young man.      13. Symmetrical shelving  Symmetry can be pleasing and satisfying to the eye, and your teen’s bedroom is no exception. Frame both sides of his bed with two identical shelves or side tables. You can even get matching lamps or decorations for each side if possible.      14. Neon lighting  If your teen is not a big fan of bedside lamps, then maybe neon lighting under the bed is the way to go when designing his room. Neon lights under your bed provide a unique and vibrant ambience, adding a touch of style and creativity to your space. The soft, colourful glow creates a soothing atmosphere, perfect for relaxation or setting the mood.     Image: Garin Chadwick on Unsplash  15. Subway tile  If you’re considering adding a feature wall to your teen boy’s bedroom, wallpaper with a subway tile design is a good option. Subway tile is a timeless and versatile design. The clean lines and uniformity of subway tiles create a visually appealing backdrop that complements various styles and decorations. They can also make a space appear larger and brighter, making them an ideal option for enhancing the aesthetic appeal of any room.      16. Blue hues  If blue is your teen boy’s favourite colour, then maybe touches of blue just aren’t enough, and he should have a blue-themed bedroom instead. Blue is a calming colour reminiscent of the ocean and sky, so incorporating blue into any space will always give a very tranquil vibe.      17. Built-in shelving  If your teen boy has many things like books, gadgets, and other personal belongings, you might want to consider built-in storage. It provides ample storage space for all his things, helping keep the room organised and clutter-free. With designated shelves, it’s easier to display hobbies or collections while maximising floor space.     Image: Christa Grover on Unsplash  18. Double trouble  If you have twins or teenage boys who are close in age, then a double room they share would work so well. You can design the room symmetrically and get identical beds. Not only does it look good, but it ensures there is no bickering over who has the cooler side.      19. Vibrant colours  If you don’t want to go the neutral colours route, vibrant colours like red, blue, and orange are fantastic for a teenage boy’s bedroom. They bring energy and personality to the space, fostering creativity and enthusiasm. Red stimulates vitality, blue promotes tranquillity, and orange inspires motivation.      20. Two-toned walls  If your teenage boy can’t decide on a wall colour, opt for a two-tone approach like black and white. It adds a modern and stylish touch, allowing for easy coordination with various decor styles. The contrasting hues create visual interest while maintaining a clean and timeless aesthetic.      21. Football mad  If the teenage boy in your life has football fever, he’ll adore this bedroom idea. Adorn the walls with football posters or decorate them using football wall decals. It’s a surefire way to create a sports-inspired haven that showcases his passion for the game.      22. Rustic industrial  If you seek style inspiration for your teenage boy’s room, the rustic-meets-industrial theme is a winning choice. Opt for brick-effect wallpaper as a striking feature wall, warm tones for shelving and side tables, and adorn the space with filament bulbs for a trendy lighting solution.      23. Loft-style  Elevating beds in a loft style looks fantastic and creates a lot more storage space. Utilise the area beneath for storage, a cosy hangout, a functional desk, or a versatile blend of all three. It’s a smart solution that optimises both style and functionality in the space.     Image: Andrea Davis on Unsplash  24. Budding musician  If your teen boy is a budding musician, then, of course, you have to create their own creative and inspiring area. Decorate the walls with music decals or music-themed art. All of his instruments can be stored here as well.      25. Space-themed mural  Maybe the teenage boy in your life is not into music or sports, but he’s into anything related to space. Bring that theme into his bedroom by including space-related art and decorations to his room. To make the stars and moon decor pop, you can paint the walls darkly, like deep blue or black. If he has a telescope, the space can also be his personal stargazing space.        So there we have it, 25 teen boys’ bedroom ideas! Whether you want to stick to neutral colours that can grow with your boy or you love celebrating their favourite things to do, such as sports or gaming, chances are your teen boy will love hanging out in their new space. What styles do you think your teen boy would love the most? Let me know in the comments below!",
              keywords: "",
              datePublished: "2023-07-18T03:41:10+11:00",
              dateModified: "2023-07-20T16:39:27+11:00",
              author: {
                "@type": "Person",
                name: "Elise Hodge",
                description:
                  "I've recently moved into a new home and I've been having so much fun decorating it with pretty wall prints and Scandinavian-inspired furniture. So as well as being a freelance writer, I'm always on the lookout for new design pieces for my home!",
                url: "https://www.airtasker.com/blog",
                sameAs: [],
                image: {
                  "@type": "ImageObject",
                  url: "https://secure.gravatar.com/avatar/404aa7f8fcb1e27f460d592ba91f884b?s=96&d=mm&r=g",
                  height: 96,
                  width: 96,
                },
              },
              editor: {
                "@type": "Person",
                name: "Elise Hodge",
                description:
                  "I've recently moved into a new home and I've been having so much fun decorating it with pretty wall prints and Scandinavian-inspired furniture. So as well as being a freelance writer, I'm always on the lookout for new design pieces for my home!",
                url: "https://www.airtasker.com/blog/author/elise-h/",
                sameAs: [],
                image: {
                  "@type": "ImageObject",
                  url: "https://secure.gravatar.com/avatar/404aa7f8fcb1e27f460d592ba91f884b?s=96&d=mm&r=g",
                  height: 96,
                  width: 96,
                },
              },
              publisher: {
                "@id": "https://www.airtasker.com/blog#Organization",
              },
              image: [
                {
                  "@type": "ImageObject",
                  "@id":
                    "https://www.airtasker.com/blog/teen-boys-bedroom-ideas/#primaryimage",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/shutterstock_332027954-scaled.jpg",
                  width: "2560",
                  height: "1707",
                  caption:
                    "Modern teen boy bedroom on colours red, blue, and orange",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/white-grey-and-black-bedroom.jpg",
                  width: 1200,
                  height: 800,
                  caption: "laptop and camera on grey and white bed",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2020/09/bedroom-with-geometric-wall.png",
                  width: 1200,
                  height: 1200,
                  caption: "boy's bedroom with blue geometric wallpaper",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2020/09/bedroom-with-disheveled-bed-and-concrete-wall.jpg",
                  width: 1200,
                  height: 1600,
                  caption: "Bedroom with disheveled bed and concrete wall",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2020/09/bedroom-with-study-desk.jpg",
                  width: 1200,
                  height: 800,
                  caption: "Bedroom with white walls, bed, and study table",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/bedroom-and-living-space-with-cabinet-barrier.jpg",
                  width: 1200,
                  height: 800,
                  caption: "living space combined with a teen's sleeping area",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/black-colored-bed-in-bedroom-with-black-walls.jpg",
                  width: 1200,
                  height: 800,
                  caption: "Unmade black bed with breakfast and book on tray",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/bedroom-with-basketball-wall-decals.png",
                  width: 1200,
                  height: 1200,
                  caption: "Bedroom with basketball wall decals",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/bed-and-desk-with-two-textured-walls.jpg",
                  width: 1200,
                  height: 759,
                  caption:
                    "White bed and wooden desk in bedroom with wooden floor and two textured walls",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/gaming-setup-with-neon-signs.jpg",
                  width: 1200,
                  height: 675,
                  caption: "Computer in dark room, lit by neon ligths",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/white-bedding-and-pillow-on-bed.jpg",
                  width: 1200,
                  height: 1500,
                  caption: "white bed pillow and white blanket on bed",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2020/09/bedroom-with-grey-walls-and-bed.jpg",
                  width: 1200,
                  height: 800,
                  caption:
                    "Bedroom with gray walls, bed, night stand, and lamp",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/red-plaid-themed-boys-bedroom.png",
                  width: 1200,
                  height: 1200,
                  caption: "red plaid-themed teen boy's bedroom",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/bedroom-with-two-wooden-side-tables-on-either-side-of-bed.jpg",
                  width: 1200,
                  height: 900,
                  caption:
                    "Bedroom with wooden side tables on each side of a bed with plaid bedding",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/neon-lighting-under-bed.jpg",
                  width: 1200,
                  height: 1500,
                  caption:
                    "Blue neon lighting under a bed with a laptop and grey bedding",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/teen-boys-room-with-yellow-subway-tile-wall.jpg",
                  width: 1200,
                  height: 800,
                  caption:
                    "Teenager's room interior with computer, bed, and yellow walls",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/bedroom-with-carpeted-floor-blue-walls-and-bed.jpg",
                  width: 1200,
                  height: 800,
                  caption:
                    "Modern, cobalt blue bedroom with double bed, gray bedding, carpet and window",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/bedroom-with-built-in-shelves.jpg",
                  width: 1200,
                  height: 800,
                  caption: "empty bedroom with built-in shelf",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/two-beds-in-room-with-orange-walls-and-desk.jpg",
                  width: 1200,
                  height: 784,
                  caption:
                    "bedroom in orange and blue colors with two beds and bookcases",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/teen-boys-bedroom-in-colours-red-blue-and-orange.jpg",
                  width: 1200,
                  height: 800,
                  caption:
                    "Modern teen boy bedroom on colours red, blue, and orange",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/two-tone-black-and-white-bedroom.jpg",
                  width: 1200,
                  height: 800,
                  caption:
                    "Stylish two tone black and white bedroom corner with decorative frame and plant",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/bedroom-with-football-posters-above-bed.jpg",
                  width: 1200,
                  height: 801,
                  caption:
                    "Double bed with grey pillows and sheets standing by wall with posters of football players in bedroom",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/bedroom-with-brick-walls-and-wooden-bed.jpg",
                  width: 1200,
                  height: 791,
                  caption:
                    "Bedroom with wooden bed, brick wall, and filament bulb as lighting",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/loft-style-bed-with-shelf.jpg",
                  width: 1200,
                  height: 1803,
                  caption: "blue and white bed pillows on lofted bed",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/music-themed-bedroom-with-guitar-and-striped-bed.jpg",
                  width: 1200,
                  height: 800,
                  caption:
                    "Monochrome bedroom interior with music decals and music-inspired wall mural",
                },
                {
                  "@type": "ImageObject",
                  url: "https://www.airtasker.com/blog/wp-content/uploads/2023/07/space-themed-bedroom-with-telescope-and-globe.jpg",
                  width: 1200,
                  height: 800,
                  caption:
                    "Telescope near bed with knit blanket against dark wall with star stickers in blue bedroom interior",
                },
              ],
              isPartOf: {
                "@id":
                  "https://www.airtasker.com/blog/teen-boys-bedroom-ideas/#webpage",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: data?.response?.title,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "<p>Most unopened items in new condition and returned within <b>90 days</b> will receive a refund or exchange. Some items have a modified return policy noted on the receipt or packing slip. Items that are opened or damaged or do not have a receipt may be denied a refund or exchange. Items purchased online or in-store may be returned to any store.</p><p>Online purchases may be returned via a major parcel carrier. <a href=https://example.com/returns> Click here </a> to initiate a return.</p>",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to process a refund?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We will reimburse you for returned items in the same way you paid for them. For example, any amounts deducted from a gift card will be credited back to a gift card. For returns by mail, once we receive your return, we will process it within 4–5 business days. It may take up to 7 days after we process the return to reflect in your account, depending on your financial institution's processing time.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the policy for late/non-delivery of items ordered online?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "<p>Our local teams work diligently to make sure that your order arrives on time, within our normaldelivery hours of 9AM to 8PM in the recipient's time zone. During  busy holiday periods like Christmas, Valentine's and Mother's Day, we may extend our delivery hours before 9AM and after 8PM to ensure that all gifts are delivered on time. If for any reason your gift does not arrive on time, our dedicated Customer Service agents will do everything they can to help successfully resolve your issue.</p><p><a href=https://example.com/orders/>Click here</a> to complete the form with your order-related question(s).</p>",
                  },
                },
                {
                  "@type": "Question",
                  name: "When will my credit card be charged?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We'll attempt to securely charge your credit card at the point of purchase online. If there's a problem, you'll be notified on the spot and prompted to use another card. Once we receive verification of sufficient funds, your payment will be completed and transferred securely to us. Your account will be charged in 24 to 48 hours.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will I be charged sales tax for online orders?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Local and State sales tax will be collected if your recipient's mailing address is in: <ul><li>Arizona</li><li>California</li><li>Colorado</li></ul>",
                  },
                },
              ],
            },
          ],
        })}
      </script>

      <h3 style={{ textAlign: "center" }}> Blogs Detail (CSR)</h3>
      <main style={{ textAlign: "center" }} className="blog-detail-wrapper">
        <Image
          src={data?.response?.image}
          width={200}
          height={100}
          style={{ objectFit: "cover" }}
          alt="Picture of the author"
        />
        <h1 className="y">{data?.response?.title}</h1>
        <p>{data?.response?.short_description}</p>
        <figure
          dangerouslySetInnerHTML={{
            __html: data?.response?.description,
          }}
        ></figure>
      </main>
    </>
  );
}
