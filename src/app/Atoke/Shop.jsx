"use client";
import Link from "next/link";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

export const products = [
  {
    id: 1,
    title: "Zebra color traditional attire",
    category:
      "Etu type: bears dark indigo colours with tiny white stripes noted for their simplicity.",
    image: "coupleblackandwhite4.jpg",
    price: 350000,
    description: [
      "Rich Indigo Hue: Etu is renowned for its deep, rich indigo color, achieved through a labor-intensive dyeing process using natural indigo leaves. This iconic hue symbolizes tradition, spirituality, and cultural authenticity within Yoruba society.",

      "Handwoven Excellence: Etu fabric is meticulously handwoven by skilled artisans on narrow looms, showcasing the mastery of traditional weaving techniques passed down through generations. Its fine craftsmanship and intricate patterns contribute to its uniqueness and allure.",

      "Geometric and Linear Designs: Etu fabric often features geometric and linear designs, including stripes, chevrons, and zigzags, which are intricately woven into the fabric. These motifs hold symbolic significance and convey messages related to identity, status, and cultural heritage.",

      "Symbol of Prestige and Authority: Historically, Etu attire was reserved for royalty, chiefs, and esteemed individuals, signifying their elevated status and authority within Yoruba society. Wearing Etu garments conveys a sense of dignity, honor, and respect for tradition.",

      "Versatile Usage: Etu fabric can be tailored into various traditional Yoruba attire, including agbada, buba, and iro, as well as modern fashion pieces. Its versatility allows for the creation of stylish ensembles suitable for ceremonial events, cultural celebrations, and everyday wear, ensuring its continued relevance and significance in contemporary Yoruba fashion.",
    ],
    tags: ["elegant", "classic", "unique", "ethereal"],
  },
  {
    id: 2,
    title: "Blue and white stripe traditional attire",
    category:
      "Etu type: bears dark indigo colours with tiny white stripes noted for their simplicity.",
    price: 400000,
    image: "coupleblueandwhite.jpg",
    description: [
      "Rich Indigo Hue: Etu is renowned for its deep, rich indigo color, achieved through a labor-intensive dyeing process using natural indigo leaves. This iconic hue symbolizes tradition, spirituality, and cultural authenticity within Yoruba society.",

      "Handwoven Excellence: Etu fabric is meticulously handwoven by skilled artisans on narrow looms, showcasing the mastery of traditional weaving techniques passed down through generations. Its fine craftsmanship and intricate patterns contribute to its uniqueness and allure.",

      "Geometric and Linear Designs: Etu fabric often features geometric and linear designs, including stripes, chevrons, and zigzags, which are intricately woven into the fabric. These motifs hold symbolic significance and convey messages related to identity, status, and cultural heritage.",

      "Symbol of Prestige and Authority: Historically, Etu attire was reserved for royalty, chiefs, and esteemed individuals, signifying their elevated status and authority within Yoruba society. Wearing Etu garments conveys a sense of dignity, honor, and respect for tradition.",

      "Versatile Usage: Etu fabric can be tailored into various traditional Yoruba attire, including agbada, buba, and iro, as well as modern fashion pieces. Its versatility allows for the creation of stylish ensembles suitable for ceremonial events, cultural celebrations, and everyday wear, ensuring its continued relevance and significance in contemporary Yoruba fashion.",
    ],
    tags: ["glamour", "ethereal", "modern", "luxurious"],
  },
  {
    id: 3,
    title: "Alaari-Inspired traditional attire",
    category:
      "Alaari type: woven with either synthetically or locally grown cotton and shinning threads, sometimes with perforated patterns.",
    price: 380000,
    image: "couplebroengreen6.jpg",
    description: [
      "Vibrant Color Palette: Alari fabric boasts a vibrant and eye-catching color palette, often featuring bold hues such as red, orange, yellow, and green. These colors symbolize vitality, energy, and cultural vibrancy within Yoruba society.",

      "Intricate Tie-Dye Techniques: Alari fabric is intricately decorated using tie-dye techniques, where sections of the fabric are tied or stitched before dyeing to create distinctive patterns. These patterns, including adire eleko and adire oniko, showcase the artistry and creativity of Yoruba textile artisans.",

      "Symbol of Cultural Identity: Alari attire serves as a symbol of cultural identity and pride within the Yoruba community. Wearing Alari garments reflects a connection to Yoruba traditions, customs, and heritage, fostering a sense of belonging and solidarity among individuals.",

      "Versatile Styling Options: Alari fabric can be tailored into various traditional Yoruba attire, including iro and gele (headscarf), as well as modern fashion pieces like dresses, skirts, and blouses. Its versatility allows for creative styling, making it suitable for both formal occasions and casual wear.",

      "Handcrafted Excellence: Alari fabric is meticulously handcrafted by skilled artisans using time-honored techniques passed down through generations. Each piece of Alari attire is a testament to the craftsmanship, dedication, and cultural legacy of Yoruba textile traditions, making it a cherished and treasured part of Yoruba heritage.",
    ],
    tags: ["bohemian", "glamour", "elegant", "classic"],
  },
  {
    id: 4,
    title: "Sanyan-Inspired Tea coloured traditional attire",
    category:
      "Sanyan type: woven from anaphe wild silk and cotton yarns. The sanyan type typically comes in a tan or brown color. [2]",
    price: 400000,
    image: "couplecream.jpg",
    description: [
      " Natural Fiber Elegance: Sanyan is made from handwoven silk or a blend of silk and cotton, giving it a luxurious feel and a distinct luster. The use of natural fibers adds to its elegance and comfort",

      " Earthy Tones and Subtle Patterns: Sanyan fabric is characterized by earthy tones such as beige, brown, and muted yellows, reflecting the natural hues of its raw materials. It often features subtle, understated patterns or textures that add depth to the fabric.",

      " Symbol of Royalty and Nobility: Historically, Sanyan was reserved for royalty and nobility, symbolizing status, wealth, and sophistication. Wearing Sanyan attire signifies a connection to Yoruba cultural heritage and a sense of pride in our lineage.",

      " Versatile Styling Options: Sanyan fabric can be tailored into various traditional Yoruba attire, including agbada, buba, and iro. Its versatility allows for creative styling, whether for formal occasions, cultural celebrations, or everyday wear.",

      " Handcrafted Excellence: Sanyan fabric is crafted with meticulous attention to detail by skilled artisans using traditional weaving techniques. Each piece is a testament to the craftsmanship and artistry passed down through generations, making it a cherished heirloom within Yoruba culture.",
    ],
    tags: ["simple", "1950s", "retro", "glamour"],
  },
  {
    id: 5,
    title: "Alari-inspirede silver coloured traditional attire",
    category:
      "Alari type: bears dark indigo colours with tiny white stripes noted for their simplicity.",
    price: 380000,
    image: "silvercouple.jpg",
    description: [
      "Vibrant Color Palette: Alari fabric boasts a vibrant and eye-catching color palette, often featuring bold hues such as red, orange, yellow, and green. These colors symbolize vitality, energy, and cultural vibrancy within Yoruba society.",

      "Intricate Tie-Dye Techniques: Alari fabric is intricately decorated using tie-dye techniques, where sections of the fabric are tied or stitched before dyeing to create distinctive patterns. These patterns, including adire eleko and adire oniko, showcase the artistry and creativity of Yoruba textile artisans.",

      "Symbol of Cultural Identity: Alari attire serves as a symbol of cultural identity and pride within the Yoruba community. Wearing Alari garments reflects a connection to Yoruba traditions, customs, and heritage, fostering a sense of belonging and solidarity among individuals.",

      "Versatile Styling Options: Alari fabric can be tailored into various traditional Yoruba attire, including iro and gele (headscarf), as well as modern fashion pieces like dresses, skirts, and blouses. Its versatility allows for creative styling, making it suitable for both formal occasions and casual wear.",

      "Handcrafted Excellence: Alari fabric is meticulously handcrafted by skilled artisans using time-honored techniques passed down through generations. Each piece of Alari attire is a testament to the craftsmanship, dedication, and cultural legacy of Yoruba textile traditions, making it a cherished and treasured part of Yoruba heritage.",
    ],
    tags: ["feminine", "elegant", "classy", "chic", "simple"],
  },
  {
    id: 6,
    title: "Alaari-Inspired nude coloured traditional attire",
    category:
      "Alaari type: woven with either synthetically or locally grown cotton and shinning threads, sometimes with perforated patterns.",
    price: 400000,
    image: "couplenude5.jpg",
    description: [
      "Vibrant Color Palette: Alari fabric boasts a vibrant and eye-catching color palette, often featuring bold hues such as red, orange, yellow, and green. These colors symbolize vitality, energy, and cultural vibrancy within Yoruba society.",

      "Intricate Tie-Dye Techniques: Alari fabric is intricately decorated using tie-dye techniques, where sections of the fabric are tied or stitched before dyeing to create distinctive patterns. These patterns, including adire eleko and adire oniko, showcase the artistry and creativity of Yoruba textile artisans.",

      "Symbol of Cultural Identity: Alari attire serves as a symbol of cultural identity and pride within the Yoruba community. Wearing Alari garments reflects a connection to Yoruba traditions, customs, and heritage, fostering a sense of belonging and solidarity among individuals.",

      "Versatile Styling Options: Alari fabric can be tailored into various traditional Yoruba attire, including iro and gele (headscarf), as well as modern fashion pieces like dresses, skirts, and blouses. Its versatility allows for creative styling, making it suitable for both formal occasions and casual wear.",

      "Handcrafted Excellence: Alari fabric is meticulously handcrafted by skilled artisans using time-honored techniques passed down through generations. Each piece of Alari attire is a testament to the craftsmanship, dedication, and cultural legacy of Yoruba textile traditions, making it a cherished and treasured part of Yoruba heritage.",
    ],
    tag: ["elegant", "shinny", "ethereal"],
  },
  {
    id: 7,
    title: "Alaari-Inspired teal coloured traditional attire",
    category:
      "Alaari type: woven with either synthetically or locally grown cotton and shinning threads, sometimes with perforated patterns.",
    price: 340000,
    image: "coupleteal.jpg",
    description: [
      "Vibrant Color Palette: Alari fabric boasts a vibrant and eye-catching color palette, often featuring bold hues such as red, orange, yellow, and green. These colors symbolize vitality, energy, and cultural vibrancy within Yoruba society.",

      "Intricate Tie-Dye Techniques: Alari fabric is intricately decorated using tie-dye techniques, where sections of the fabric are tied or stitched before dyeing to create distinctive patterns. These patterns, including adire eleko and adire oniko, showcase the artistry and creativity of Yoruba textile artisans.",

      "Symbol of Cultural Identity: Alari attire serves as a symbol of cultural identity and pride within the Yoruba community. Wearing Alari garments reflects a connection to Yoruba traditions, customs, and heritage, fostering a sense of belonging and solidarity among individuals.",

      "Versatile Styling Options: Alari fabric can be tailored into various traditional Yoruba attire, including iro and gele (headscarf), as well as modern fashion pieces like dresses, skirts, and blouses. Its versatility allows for creative styling, making it suitable for both formal occasions and casual wear.",

      "Handcrafted Excellence: Alari fabric is meticulously handcrafted by skilled artisans using time-honored techniques passed down through generations. Each piece of Alari attire is a testament to the craftsmanship, dedication, and cultural legacy of Yoruba textile traditions, making it a cherished and treasured part of Yoruba heritage.",
    ],
    tag: ["classic", "luxurious", "modern", "timeless"],
  },

  {
    id: 8,
    title: "Etu-Inspired earth coloured trditional attire",
    category:
      "Etu type: bears dark indigo colours with tiny white stripes noted for their simplicity.",
    price: 200000,
    image: "femaletrad.jpg",
    description: [
      "Rich Indigo Hue: Etu is renowned for its deep, rich indigo color, achieved through a labor-intensive dyeing process using natural indigo leaves. This iconic hue symbolizes tradition, spirituality, and cultural authenticity within Yoruba society.",

      "Handwoven Excellence: Etu fabric is meticulously handwoven by skilled artisans on narrow looms, showcasing the mastery of traditional weaving techniques passed down through generations. Its fine craftsmanship and intricate patterns contribute to its uniqueness and allure.",

      "Geometric and Linear Designs: Etu fabric often features geometric and linear designs, including stripes, chevrons, and zigzags, which are intricately woven into the fabric. These motifs hold symbolic significance and convey messages related to identity, status, and cultural heritage.",

      "Symbol of Prestige and Authority: Historically, Etu attire was reserved for royalty, chiefs, and esteemed individuals, signifying their elevated status and authority within Yoruba society. Wearing Etu garments conveys a sense of dignity, honor, and respect for tradition.",

      "Versatile Usage: Etu fabric can be tailored into various traditional Yoruba attire, including agbada, buba, and iro, as well as modern fashion pieces. Its versatility allows for the creation of stylish ensembles suitable for ceremonial events, cultural celebrations, and everyday wear, ensuring its continued relevance and significance in contemporary Yoruba fashion.",
    ],
    tags: ["feminine", "elegant", "classy", "chic", "simple"],
  },
  {
    id: 9,
    title: "Etu-Inspired wine background traditional attire",
    category:
      "Etu type: bears dark indigo colours with tiny white stripes noted for their simplicity.",
    price: 350000,
    image: "femaletrad4.jpg",
    description: [
      "Rich Indigo Hue: Etu is renowned for its deep, rich indigo color, achieved through a labor-intensive dyeing process using natural indigo leaves. This iconic hue symbolizes tradition, spirituality, and cultural authenticity within Yoruba society.",

      "Handwoven Excellence: Etu fabric is meticulously handwoven by skilled artisans on narrow looms, showcasing the mastery of traditional weaving techniques passed down through generations. Its fine craftsmanship and intricate patterns contribute to its uniqueness and allure.",

      "Geometric and Linear Designs: Etu fabric often features geometric and linear designs, including stripes, chevrons, and zigzags, which are intricately woven into the fabric. These motifs hold symbolic significance and convey messages related to identity, status, and cultural heritage.",

      "Symbol of Prestige and Authority: Historically, Etu attire was reserved for royalty, chiefs, and esteemed individuals, signifying their elevated status and authority within Yoruba society. Wearing Etu garments conveys a sense of dignity, honor, and respect for tradition.",

      "Versatile Usage: Etu fabric can be tailored into various traditional Yoruba attire, including agbada, buba, and iro, as well as modern fashion pieces. Its versatility allows for the creation of stylish ensembles suitable for ceremonial events, cultural celebrations, and everyday wear, ensuring its continued relevance and significance in contemporary Yoruba fashion.",
    ],
    tags: ["feminine", "elegant", "classy", "chic", "simple"],
  },
  {
    id: 10,
    title: "Alaari-Inspired golden traditional attire",
    category:
      "Alaari type: woven with either synthetically or locally grown cotton and shinning threads, sometimes with perforated patterns.",
    price: 250000,
    image: "femaletrad5.jpg",
    description: [
      "Vibrant Color Palette: Alari fabric boasts a vibrant and eye-catching color palette, often featuring bold hues such as red, orange, yellow, and green. These colors symbolize vitality, energy, and cultural vibrancy within Yoruba society.",

      "Intricate Tie-Dye Techniques: Alari fabric is intricately decorated using tie-dye techniques, where sections of the fabric are tied or stitched before dyeing to create distinctive patterns. These patterns, including adire eleko and adire oniko, showcase the artistry and creativity of Yoruba textile artisans.",

      "Symbol of Cultural Identity: Alari attire serves as a symbol of cultural identity and pride within the Yoruba community. Wearing Alari garments reflects a connection to Yoruba traditions, customs, and heritage, fostering a sense of belonging and solidarity among individuals.",

      "Versatile Styling Options: Alari fabric can be tailored into various traditional Yoruba attire, including iro and gele (headscarf), as well as modern fashion pieces like dresses, skirts, and blouses. Its versatility allows for creative styling, making it suitable for both formal occasions and casual wear.",

      "Handcrafted Excellence: Alari fabric is meticulously handcrafted by skilled artisans using time-honored techniques passed down through generations. Each piece of Alari attire is a testament to the craftsmanship, dedication, and cultural legacy of Yoruba textile traditions, making it a cherished and treasured part of Yoruba heritage.",
    ],
    tags: ["feminine", "elegant", "classy", "chic", "simple"],
  },
  {
    id: 11,
    title: "Alaari-Inspired traditional attire",
    category:
      "Alaari type: woven with either synthetically or locally grown cotton and shinning threads, sometimes with perforated patterns.",
    price: 350000,
    image: "maletrad4.jpg",
    description: [
      "Vibrant Color Palette: Alari fabric boasts a vibrant and eye-catching color palette, often featuring bold hues such as red, orange, yellow, and green. These colors symbolize vitality, energy, and cultural vibrancy within Yoruba society.",

      "Intricate Tie-Dye Techniques: Alari fabric is intricately decorated using tie-dye techniques, where sections of the fabric are tied or stitched before dyeing to create distinctive patterns. These patterns, including adire eleko and adire oniko, showcase the artistry and creativity of Yoruba textile artisans.",

      "Symbol of Cultural Identity: Alari attire serves as a symbol of cultural identity and pride within the Yoruba community. Wearing Alari garments reflects a connection to Yoruba traditions, customs, and heritage, fostering a sense of belonging and solidarity among individuals.",

      "Versatile Styling Options: Alari fabric can be tailored into various traditional Yoruba attire, including iro and gele (headscarf), as well as modern fashion pieces like dresses, skirts, and blouses. Its versatility allows for creative styling, making it suitable for both formal occasions and casual wear.",

      "Handcrafted Excellence: Alari fabric is meticulously handcrafted by skilled artisans using time-honored techniques passed down through generations. Each piece of Alari attire is a testament to the craftsmanship, dedication, and cultural legacy of Yoruba textile traditions, making it a cherished and treasured part of Yoruba heritage.",
    ],
    tags: ["masculine", "poise", "elegance"],
  },
  {
    id: 12,
    title: "Sanyan-Inspired traditional attire",
    category:
      "Sanyan type: woven from anaphe wild silk and cotton yarns. The sanyan type typically comes in a tan or brown color. [2]",
    price: 200000,
    image: "maletrad5.jpg",
    description: [
      " Natural Fiber Elegance: Sanyan is made from handwoven silk or a blend of silk and cotton, giving it a luxurious feel and a distinct luster. The use of natural fibers adds to its elegance and comfort",

      " Earthy Tones and Subtle Patterns: Sanyan fabric is characterized by earthy tones such as beige, brown, and muted yellows, reflecting the natural hues of its raw materials. It often features subtle, understated patterns or textures that add depth to the fabric.",

      " Symbol of Royalty and Nobility: Historically, Sanyan was reserved for royalty and nobility, symbolizing status, wealth, and sophistication. Wearing Sanyan attire signifies a connection to Yoruba cultural heritage and a sense of pride in our lineage.",

      " Versatile Styling Options: Sanyan fabric can be tailored into various traditional Yoruba attire, including agbada, buba, and iro. Its versatility allows for creative styling, whether for formal occasions, cultural celebrations, or everyday wear.",

      " Handcrafted Excellence: Sanyan fabric is crafted with meticulous attention to detail by skilled artisans using traditional weaving techniques. Each piece is a testament to the craftsmanship and artistry passed down through generations, making it a cherished heirloom within Yoruba culture.",
    ],
    tags: ["masculine", "poise", "elegance"],
  },

  {
    id: 13,
    title: "Alaari-Inspired teal coloured traditional attire",
    category:
      "Alaari type: woven with either synthetically or locally grown cotton and shinning threads, sometimes with perforated patterns.",
    price: 200000,
    image: "couplemint2.jpg",
    description: [
      "Vibrant Color Palette: Alari fabric boasts a vibrant and eye-catching color palette, often featuring bold hues such as red, orange, yellow, and green. These colors symbolize vitality, energy, and cultural vibrancy within Yoruba society.",

      "Intricate Tie-Dye Techniques: Alari fabric is intricately decorated using tie-dye techniques, where sections of the fabric are tied or stitched before dyeing to create distinctive patterns. These patterns, including adire eleko and adire oniko, showcase the artistry and creativity of Yoruba textile artisans.",

      "Symbol of Cultural Identity: Alari attire serves as a symbol of cultural identity and pride within the Yoruba community. Wearing Alari garments reflects a connection to Yoruba traditions, customs, and heritage, fostering a sense of belonging and solidarity among individuals.",

      "Versatile Styling Options: Alari fabric can be tailored into various traditional Yoruba attire, including iro and gele (headscarf), as well as modern fashion pieces like dresses, skirts, and blouses. Its versatility allows for creative styling, making it suitable for both formal occasions and casual wear.",

      "Handcrafted Excellence: Alari fabric is meticulously handcrafted by skilled artisans using time-honored techniques passed down through generations. Each piece of Alari attire is a testament to the craftsmanship, dedication, and cultural legacy of Yoruba textile traditions, making it a cherished and treasured part of Yoruba heritage.",
    ],
    tag: ["sleek", "modern", "sheath", "contemporary", "sophisticated"],
  },

  {
    id: 14,
    title: "Sanyan-Inspired double colored traditional attire",
    category:
      "Sanyan type: woven from anaphe wild silk and cotton yarns. The sanyan type typically comes in a tan or brown color. [2]",
    price: 280000,
    image: "maletrad6.jpg",
    description: [
      " Natural Fiber Elegance: Sanyan is made from handwoven silk or a blend of silk and cotton, giving it a luxurious feel and a distinct luster. The use of natural fibers adds to its elegance and comfort",

      " Earthy Tones and Subtle Patterns: Sanyan fabric is characterized by earthy tones such as beige, brown, and muted yellows, reflecting the natural hues of its raw materials. It often features subtle, understated patterns or textures that add depth to the fabric.",

      " Symbol of Royalty and Nobility: Historically, Sanyan was reserved for royalty and nobility, symbolizing status, wealth, and sophistication. Wearing Sanyan attire signifies a connection to Yoruba cultural heritage and a sense of pride in our lineage.",

      " Versatile Styling Options: Sanyan fabric can be tailored into various traditional Yoruba attire, including agbada, buba, and iro. Its versatility allows for creative styling, whether for formal occasions, cultural celebrations, or everyday wear.",

      " Handcrafted Excellence: Sanyan fabric is crafted with meticulous attention to detail by skilled artisans using traditional weaving techniques. Each piece is a testament to the craftsmanship and artistry passed down through generations, making it a cherished heirloom within Yoruba culture.",
    ],
    tags: ["masculine", "poise", "elegance"],
  },

  {
    id: 15,
    title: "Etu-Inspiried double coloured traditional attire",
    category:
      "Etu type: bears dark indigo colours with tiny white stripes noted for their simplicity.",
    price: 350000,
    image: "maletrad8.jpg",
    description: [
      "Rich Indigo Hue: Etu is renowned for its deep, rich indigo color, achieved through a labor-intensive dyeing process using natural indigo leaves. This iconic hue symbolizes tradition, spirituality, and cultural authenticity within Yoruba society.",

      "Handwoven Excellence: Etu fabric is meticulously handwoven by skilled artisans on narrow looms, showcasing the mastery of traditional weaving techniques passed down through generations. Its fine craftsmanship and intricate patterns contribute to its uniqueness and allure.",

      "Geometric and Linear Designs: Etu fabric often features geometric and linear designs, including stripes, chevrons, and zigzags, which are intricately woven into the fabric. These motifs hold symbolic significance and convey messages related to identity, status, and cultural heritage.",

      "Symbol of Prestige and Authority: Historically, Etu attire was reserved for royalty, chiefs, and esteemed individuals, signifying their elevated status and authority within Yoruba society. Wearing Etu garments conveys a sense of dignity, honor, and respect for tradition.",

      "Versatile Usage: Etu fabric can be tailored into various traditional Yoruba attire, including agbada, buba, and iro, as well as modern fashion pieces. Its versatility allows for the creation of stylish ensembles suitable for ceremonial events, cultural celebrations, and everyday wear, ensuring its continued relevance and significance in contemporary Yoruba fashion.",
    ],
    tags: ["feminine", "elegant", "classy", "chic", "simple"],
  },
];

export default function Products() {
  const [sort, setSort] = useState("");

  function searchProducts(e) {
    setSort(e.target.value);
  }

  const filteredList = products.filter(
    (topics) =>
      topics.title.toLowerCase().includes(sort.toLowerCase()) ||
      topics.category.toLowerCase().includes(sort.toLowerCase())
  );

  const TopicsCart =
    filteredList.length == 0 ? (
      <h2>No item found</h2>
    ) : (
      filteredList.map((cart) => (
        <section
          key={cart.id}
          className="md:col-span-1 col-span-3 border rounded flex flex-col justify-between p-4 transition-shadow duration-200 shadow-lg"
        >
          <Link href={`/Atoke/${cart.title.split(" ").join("-")}`}>
            <Image
              src={`/${cart.image}`}
              alt={cart.title}
              width={300}
              height={400}
              className=" md:col-span-1 col-span-3 border rounded flex flex-col justify-between p-4 transition-shadow duration-200 shadow-lg"
            />
            <h2 className="mt-6 leading-6">{cart.title.toUpperCase()}</h2>
            <p className="mt-3">
              &#8358; <span>{cart.price.toLocaleString()}</span>
            </p>
          </Link>
        </section>
      ))
    );

  return (
    <>
      <div className="flex items-center border-4 border-gray-600 rounded-full m-auto w-1/3 p-4 leading-4">
        <input
          type="text"
          name="text"
          id="text"
          placeholder="search for products or category"
          className="outline-none border-none pl-8 w-5/6 mb-"
          defaultValue={sort}
          onChange={searchProducts}
        />
        <IoIosSearch />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">{TopicsCart}</div>
    </>
  );
}
