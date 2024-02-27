import React from 'react'

export default function Topics() {
  const topics = [
    
      
        {
          id: 1,
          title: "Elegant Lace Mermaid Wedding Gown",
          category: "Mermaid Wedding Gowns",
          price: 1500,
          description: [
            "This exquisite mermaid wedding gown features intricate lace detailing that cascades down the bodice and extends into a beautiful train. The sweetheart neckline and fitted silhouette accentuate the curves, creating a stunning and feminine look. With its delicate lace sleeves and illusion back, this gown exudes timeless elegance. Whether you're exchanging vows in a grand cathedral or a picturesque garden, this dress will make you feel like a true princess on your special day."
          ],
          tags: ["lace", "mermaid", "elegant", "timeless", "feminine"]
        },
        {
          id: 2,
          title: "Princess Ball Gown with Sparkling Embellishments",
          category: "Ball Gown Wedding Dresses",
          price: 2500,
          description: [
            "Feel like royalty on your wedding day with this stunning princess ball gown. Adorned with sparkling embellishments and intricate beadwork, this dress captures the essence of romance and luxury. The voluminous skirt adds drama and flair as you glide down the aisle, while the corset-style bodice provides a flattering fit. Whether you're having a traditional ballroom wedding or a fairytale-inspired celebration, this gown will make you feel like the belle of the ball."
          ],
          tags: ["princess", "ball gown", "sparkling", "romantic", "luxurious"]
        },
        {
          id: 3,
          title: "Bohemian-Inspired Lace A-Line Gown",
          category: "Bohemian Wedding Dresses",
          price: 1800,
          description: [
            "Embrace your free-spirited nature with this bohemian-inspired lace A-line gown. The soft, flowing silhouette is perfect for outdoor weddings and beach ceremonies. Delicate lace detailing adorns the bodice and extends into a whimsical skirt, creating a romantic and ethereal look. The off-the-shoulder neckline adds a touch of bohemian charm, while the comfortable fit allows for effortless movement and dancing all night long."
          ],
          tags: ["bohemian", "lace", "A-line", "romantic", "ethereal"]
        },
        {
          id: 4,
          title: "Vintage-Inspired Tea Length Wedding Dress",
      category: "Vintage Wedding Dresses",
          price: 1200,
          description: [
            "Channel old Hollywood glamour with this vintage-inspired tea length wedding dress. Reminiscent of the 1950s era, this dress features a sweetheart neckline, cap sleeves, and a full skirt that falls gracefully to mid-calf. The intricate lace overlay adds a touch of sophistication, while the tea length hemline allows for ease of movement and showcases your stylish footwear. Perfect for retro-themed weddings or intimate garden ceremonies, this gown will transport you to a bygone era of romance and elegance."
          ],
          tags: ["vintage", "tea length", "1950s", "retro", "glamour"]
        },
        {
        id: 5,
          title: "Sleek and Modern Sheath Wedding Dress",
          category: "Sheath Wedding Dresses",
          price: 2000,
          description: [
            "Make a statement with this sleek and modern sheath wedding dress. The clean lines and minimalist design create a contemporary and sophisticated look that's perfect for the modern bride. Crafted from luxurious satin fabric, this dress drapes beautifully over the body, accentuating your curves in all the right places. The plunging V-neckline adds a hint of allure, while the low back adds a touch of drama. Whether you're saying 'I do' in a chic city loft or a sleek rooftop venue, this gown will ensure you stand out in style."
          ],
        tag: ["sleek", "modern", "sheath", "contemporary", "sophisticated"]
        },
        {
        i: 6,
        title: "Romantic Tulle Princess Wedding Gown",
        category: "Princess Wedding Dresses",
        price: 2200,
        descriptio: [
            "Feel like a fairytale princess on your wedding day with this romantic tulle gown. The full ball gown silhouette is adorned with layers of soft tulle that float ethereally with every step. Intricate lace appliques cascade down the bodice and skirt, adding a touch of timeless elegance. The strapless sweetheart neckline accentuates the décolletage, while the corset-style back ensures a perfect fit. Whether you're having a grand castle wedding or a rustic barn celebration, this gown will make you feel like royalty."
          ],
        tag: ["romantic", "tulle", "princess", "ball gown", "ethereal"]
        },
        {
      i: 7,
          title: "Classic Strapless Satin A-Line Gown",
          category: "A-Line Wedding Dresses",
          price: 1700,
          descriptio: [
            "Achieve timeless elegance with this classic strapless satin A-line gown. The clean lines and simple silhouette make it a versatile choice for any wedding style, from traditional to modern. Crafted from luxurious satin fabric, this dress drapes effortlessly over the body, creating a flattering and feminine look. The sweetheart neckline adds a romantic touch, while the A-line skirt flows gracefully to the floor. Whether you're saying 'I do' in a grand cathedral or a quaint garden, this gown will ensure you make a lasting impression."
          ],
        tag: ["classic", "strapless", "satin", "A-line", "timeless"]
        },
        {
        i: 8,
        title: "Glamorous Beaded Fit-and-Flare Gown",
        categor: "Fit-and-Flare Wedding Dresses",
        pric: 2800,
        descriptio: [
            "Turn heads with this glamorous beaded fit-and-flare gown. Sparkling beadwork adorns the bodice and extends into a dramatic skirt, creating a dazzling effect that's sure to captivate. The fitted silhouette hugs your curves in all the right places, while the flared skirt adds movement and drama. The illusion neckline and low back add a modern twist to this classic silhouette, making it perfect for the fashion-forward bride. Whether you're exchanging vows in a chic city venue or a glamorous ballroom, this gown will ensure you make a memorable entrance."
          ],
          tags: ["glamorous", "beaded", "fit-and-flare", "dramatic", "captivating"]
        },
        {
          id: 9,
          title: "Boho Chic Off-the-Shoulder Wedding Dress",
          category: "Bohemian Wedding Dresses",
          price: 1900,
          description: [
            "Channel effortless boho chic with this off-the-shoulder wedding dress. The relaxed silhouette and soft chiffon fabric make it perfect for outdoor weddings and relaxed ceremonies. Delicate lace detailing adorns the bodice and sleeves, adding a touch of romance and femininity. The off-the-shoulder neckline frames the décolletage beautifully, while the flowing skirt moves gracefully with every step. Whether you're saying 'I do' on a sandy beach or in a lush garden, this gown will ensure you look and feel like a bohemian goddess."
          ],
          tags: ["boho chic", "off-the-shoulder", "chiffon", "romantic", "relaxed"]
        },
        {
          id: 10,
          title: "Sleek and Sophisticated Column Wedding Gown",
          category: "Column Wedding Dresses",
          price: 2100,
          description: [
            "Make a statement with this sleek and sophisticated column wedding gown. The minimalist design and clean lines create a modern and chic silhouette that's perfect for the contemporary bride. Crafted from luxurious crepe fabric, this gown drapes beautifully over the body, accentuating your curves with understated elegance. The high neckline and cap sleeves add a touch of sophistication, while the low back adds a hint of allure. Whether you're exchanging vows in a sleek city venue or a modern art gallery, this gown will ensure you make a stylish impression."
          ],
          tags: ["sleek", "sophisticated", "column", "modern", "chic"]
        },
        {
          id: 11,
          title: "Enchanting Floral Ball Gown",
          category: "Ball Gown Wedding Dresses",
          price: 2600,
          description: [
            "Dazzle your guests with this enchanting floral ball gown. The bodice is adorned with intricate floral appliques that cascade down the skirt, creating a whimsical and romantic look. The full ball gown silhouette adds drama and flair, while the strapless sweetheart neckline frames the décolletage beautifully. Layers of tulle and organza create volume and movement, making this gown perfect for twirling on the dance floor. Whether you're saying 'I do' in a grand ballroom or a magical garden, this dress will make you feel like a true princess."
          ],
          tags: ["floral", "ball gown", "whimsical", "romantic", "enchanting"]
        },
        {
          id: 12,
          title: "Chic and Simple Beach Wedding Dress", 
          category: "Beach Wedding Dresses",
          price: 1600,
          description: [
            "Embrace laid-back elegance with this chic and simple beach wedding dress. The lightweight chiffon fabric and flowy silhouette make it perfect for beach weddings and destination ceremonies. The strapless bodice features subtle ruching for added texture and dimension, while the flowing skirt moves gracefully with every step. Whether you're exchanging vows on a sandy shore or a tropical island, this gown will ensure you look effortlessly beautiful as you say 'I do' against the backdrop of the ocean."
          ],
          tags: ["chic", "simple", "beach", "chiffon", "elegant"]
        },
        {
          id: 13,
          title: "Timeless Off-the-Shoulder Lace Gown",
          category: "Lace Wedding Dresses",
          price: 2300,
          description: [
            "Exude timeless elegance with this off-the-shoulder lace gown. The classic silhouette is enhanced by delicate lace detailing that adorns the bodice and sleeves, creating a romantic and feminine look. The off-the-shoulder neckline showcases the décolletage, while the fitted bodice accentuates the waist. The flowing skirt adds movement and grace, making this gown perfect for twirling on the dance floor. Whether you're saying 'I do' in a rustic barn or a grand cathedral, this dress will ensure you make a stunning entrance."
          ],
          tags: ["timeless", "off-the-shoulder", "lace", "romantic", "feminine"]
        },
        {
          id: 14,
          title: "Ethereal Illusion Neckline Gown",
          category: "Illusion Neckline Wedding Dresses",
          price: 2400,
          description: [
            "Capture everyone's attention with this ethereal illusion neckline gown. The sheer bodice is adorned with intricate lace appliques that create a mesmerizing effect, while the illusion neckline adds a modern twist. The flowing chiffon skirt moves gracefully with every step, creating a dreamy and romantic look. Whether you're exchanging vows in a lush garden or a chic city venue, this gown will ensure you look and feel like a goddess on your special day."
          ],
          tags: ["ethereal", "illusion neckline", "lace", "chiffon", "romantic"]
        },
        {
          id: 15,
          title: "Sophisticated High-Low Hemline Gown",
          category: "High-Low Wedding Dresses",
          price: 1700,
          description: [
            "Make a statement with this sophisticated high-low hemline gown. The modern silhouette features a high neckline and fitted bodice that's perfect for the fashion-forward bride. The dramatic high-low hemline adds a touch of flair, allowing you to showcase your stylish footwear as you walk down the aisle. Crafted from luxurious satin fabric, this gown drapes beautifully over the body, creating a flattering and feminine look. Whether you're saying 'I do' in a chic city venue or a trendy rooftop, this gown will ensure you stand out in style."
          ],
          tags: ["sophisticated", "high-low", "hemline", "modern", "fashion-forward"]
        }
      ]
    
  return (
    <div>Topics</div>
  )
}
