import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Category from "../Componnets/Category";
import CustomerCare from "../Componnets/CustomerCare";

const Hometab = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Categories</Text>
        <Category data={data} navigation={navigation} />
      </View>

      <View>
        <Text style={styles.text}>weather forcaste</Text>
      </View>
    </View>
  );
};

export default Hometab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 22,
    paddingLeft: 30,
    fontWeight: "bold",
  },
});

const data = {
  categories: [
    {
      id: 1,
      name: "Herbicides",
      image: require("../assets/herbicides.jpg"),
    },
    {
      id: 2,
      name: "Growth Promoters",
      image: require("../assets/growthpromo.png"),
    },
    {
      id: 3,
      name: "Seeds",
      image: require("../assets/seeds.jpg"),
    },
    {
      id: 4,
      name: "Viricides",
      image: require("../assets/viricides.png"),
    },
    {
      id: 5,
      name: "Farm Machinery",
      image: require("../assets/farmmachinery.jpg"),
    },
    {
      id: 6,
      name: "Nutrients",
      image: require("../assets/nutrients.jpg"),
    },
    {
      id: 7,
      name: "Insecticides",
      image: require("../assets/insecticides.jpg"),
    },
    {
      id: 8,
      name: "Pesticides",
      image: require("../assets/pesticides.png"),
    },
    {
      id: 9,
      name: "Fungicides",
      image: require("../assets/fungicides.png"),
    },
  ],
  products: {
    Herbicides: [
      {
        id: 1,
        name: "Hitweed Herbicide",
        price: 5640,
        image: require("../assets/herbicides/hitweed.jpg"),
        description:
          "Hitweed is India's first highly seelctive herbicide for Cotton. It contains 'Pyrithiobac Sodium' as active ingredient.Hitweed is highly effective on several broad leaf weeds",
      },
      {
        id: 2,
        name: "Nivshakti Yodha (Bio For Thrips And Mites)",
        price: 1500,
        image: require("../assets/herbicides/nivshakti.jpg"),
        description:
          "Yodha works excellent in controlling early stages of thrips and mites. It has given excellent result in chill and other vegetables crops.",
      },
      {
        id: 3,
        name: "Foster Insecticide",
        price: 368,
        image: require("../assets/herbicides/foster.jpg"),
        description:
          "Foster Insecticide belongs to new chemistry, benzoyl acetonitrile,the only miticide in this category. It is registered in more than 20 countries.It has long residual activity, hence longer duration of control.",
      },
      {
        id: 4,
        name: "Silver Crop Glyfosil-54 Speed | Herbicide",
        price: 1123,
        image: require("../assets/herbicides/silver_crop.jpg"),
        description:
          "Glyfosil-54 Speed is a systemic, non-selective, broad-spectrum, high-loaded Glyphosate formulation with IPA salt that ensures: ‘More Power – More Coverage’ with consistent control of all types of weeds under Non-Crop situations.",
      },
      {
        id: 5,
        name: "SEMPRA HERBICIDE",
        price: 222,
        image: require("../assets/herbicides/sempra.jpg"),
        description:
          "Sempra Herbicide is the first herbicide introduced in India by Dhanuka Agritech Ltd for effective control of Cyperus rotundus.It is a selective, systemic, post-emergence herbicide with WDG formulation for effective control of Cyperus rotundus from nuts in Sugarcane and Maize crop.Sempra Herbicide has strong systemic action i.e. moves in both ways through Xylem & Phloem.",
      },
      {
        id: 6,
        name: "NOMINEE GOLD",
        price: 500,
        image: require("../assets/herbicides/Nominee-Gold.jpg"),
        description:
          "Nominee Gold is a Post Emergent, Broad Spectrum systemic herbicide for all types of Rice cultivation i.e. direct sown rice, rice nursery and transplanted rice.",
      },
      {
        id: 7,
        name: "FERIO HERBICIDE",
        price: 700,
        image: require("../assets/herbicides/FERIO.jpg"),
        description:
          "Ferio is a non-selective, post emergent herbicide used for the control of perennial weeds in plantation crops.Ferio has got broad-spectrum efficacy that can control broad leaf and grassy weeds.Ferio is contact herbicide, on be safe to the crop spray hood may be used to avoid spill of drift on crops.Ferio causes no harm to soil and water.",
      },
      {
        id: 8,
        name: "SAATHI HERBICIDE",
        price: 190,
        image: require("../assets/herbicides/SAATHI.jpg"),
        description:
          "Saathi Herbicide is a highly versatile pre-emergence herbicide, it is both soil & foliage active to control rice weeds effectively from the beginning.",
      },
    ],
    "Growth Promoters": [
      {
        id: 9,
        name: "ISABION GROWTH PROMOTER",
        price: 140,
        image: require("../assets/growthpromoters/isabion.jpg"),
        description:
          "Isabion growth promoter is a natural biostimulant, and contains a well-balanced mix with the optimal ratio between short-chain peptides, long-chain peptides, and free amino acids.Isabion is the world’s purest and most concentrated product of Amino acids of natural origin. Isabion enables the plant to increase yield and quality of produce naturally.",
      },
      {
        id: 10,
        name: "MULTIPLEX FLOWER BOOSTER",
        price: 135,
        image: require("../assets/growthpromoters/flowerbooster.jpg"),
        description:
          "Contains all essential nutrients - major, second and trace elements in easily available form.",
      },
      {
        id: 11,
        name: "VENUS EVERGREEN",
        price: 200,
        image: require("../assets/growthpromoters/venus.jpg"),
        description:
          "Evergreen is a high quality biostimult. It uses a total of 12 different biological stimulants. This greatly enhances the usefulness of the formula. Evergreen has 12 different types of ingredients, which are useful for crops from root to fruit. Evergreen helps in every condition of the crop. Evergreen helps to increase crop canopy, number of leaves, number of branches, number of flowers, number of fruits, size and quality. 2 to 3 sprays on each crop increase the yield by 20 to 30%. Suitable for all crops.",
      },
      {
        id: 12,
        name: "INFINITE ROOT POWER",
        price: 599,
        image: require("../assets/growthpromoters/rootpower.jpg"),
        description:
          "Organic Rooting Hormone - a Route to enhanced Roots(Root activator & enhancer).Roots Power - The powerful rooting stimulator, It activates a potent, branched, and dense root system that results in enhanced and elongated roots that improve the absorption and recipiency of nutrients. While activating the generation of new roots that results in stress reduction.Roots Power is a complete bio-plant hormone mixture for stimulating rapid and prolific rooting of all types of plant cutting.",
      },
      {
        id: 13,
        name: "BACF XON (GROWTH PROMOTER)",
        price: 1405,
        image: require("../assets/growthpromoters/baxon.jpg"),
        description:
          "Technical: NPK Bacteria, PGPR, Sea weed, Humic, Fermentation media. Target Crops: All Crops. Target Pest : Improve crop tolerance for the abiotic stresses. Mode of Action: Soil and Foliar action",
      },
      {
        id: 14,
        name: "KAZUKI (GROWTH PROMOTER)",
        price: 370,
        image: require("../assets/growthpromoters/Kazuki.jpg"),
        description:
          "Technical Name: Organic Biofertilizer Type of Pesticide: Nitrogen Fixation Plant growth promoterBenefits of using the product: Improves the Nitrogen fixation and other nutrients in plants Method of application: Spray Targeted Pest/Disease: All types of crops for growth and development Dosage per acre: 500 ml/acre with 200 ltr of water",
      },
    ],
    "Farm Machinery": [
      {
        id: 15,
        name: "HECTARE HAND WEEDER - LWS 07 (WITHOUT PIPE)",
        price: 560,
        image: require("../assets/farmmachinery/hectarehand.jpg"),
        description:
          "Colour : Yellow Useful for removing weeds in any field Can be attached to metal / wooden sticking for weeding Powder coating to make it rust resistant Light weight and easy to operate Hand held product, no power and maintenance required Length of the blade is 8 inches",
      },
      {
        id: 16,
        name: "BALWAAN BS-20 KRISHI SINGLE MOTOR BATTERY SPRAYER| 12X8",
        price: 2890,
        image: require("../assets/farmmachinery/balwaaan.png"),
        description:
          "This sprayer has multiple applications and is widely used in agriculture, horticulture, sericulture, plantations, forestry, gardens, institutions, universities, etc.Suitable for spraying weedicides, Insecticides, and water-soluble medicines on crops, sanitizing infected objects, etc.It comes with a high tank capacity of 18 liters and four nozzles that displays different spraying volume when attached to it.Equipped with a High Performance and long-lasting 12Vx8A Dry Acid battery.",
      },
      {
        id: 17,
        name: "LIGHTWEIGHT MULTI UTILTY TORCH (MS324) IMPLEMENT",
        price: 750,
        image: require("../assets/farmmachinery/torch.jpg"),
        description:
          " BATTERY: 3.7V 2400 mAh, LIGHT SOURCE: LED 2 W, BACKUP DURATION: Upto 8 hrs,BATTERY LOW INDICATION: Torch On/ Off flash, BRIGHTNESS: Yes CHARGING INDICATION: RED LED ON CHARGED INDICATION: GREEN LED ON",
      },
      {
        id: 18,
        name: "DR ENTERPRISE FARMER SAFETY SHOES | LONG LENGTH PADDY SHOES | AGRICULTURE SHOES",
        price: 1599,
        image: require("../assets/farmmachinery/boots.jpg"),
        description:
          "Farmers who are working mostly in the soil mud, it is the best option to save their feet from snake bite, insects in soil, sores etc.High quality new PVC material, flexibility, durable and unbreakable Seamless forming, military quality, long wear and no leakage Wear-resisting outsole, anti-slip and shock absorption Not afraid of strong acid and alkali High quality and easy to clean.",
      },
      {
        id: 19,
        name: "TARPAULIN (WATERPROOF, HEAVY DUTY, COLOURS: YELLOW, BLUE & SILVER)",
        price: 975,
        image: require("../assets/farmmachinery/trapulin.jpg"),
        description:
          "EXTRA THICK & STRONG: Made up of 100% virgin raw material, UV Stabilized, tear-resistant, 100% water-resistant, durable, flexible, and last long for so many years. WATERPROOF: Tarps can be used to shelter boats, cars, campers, or motor-vehicles from the elements (i.e. wind, rain, or sunlight), as an emergency roof patch material for homeowners, and as a temporary pickup truck bed cover. TIE IT DOWN EASILY: Aluminium Eyelets spaced every 3 feet and at each corner allow this poly tarp to be tied down and secured simply. Create a tent for camping, fairs, and more! MULTIPURPOSE USE: Cover and protect your Vehicle or wood and building materials at construction sites; keep floors clean using this is a drop sheet when painting or polishing - the uses are endless.THE BEST AROUND: Made from polyethylene, this material is made to last. Don't get tired of replacing torn, worn-out plastic tarps, use one that offers the best protection and is designed to last.",
      },
      {
        id: 20,
        name: "AUTOSTUDIO HOSE PIPE 160 FEETS 8.5MM HALF INCH CONNECTOR | IMPLEMEMTS",
        price: 2599,
        image: require("../assets/farmmachinery/pipe.jpg"),
        description:
          "Kaveri 8.5mmx100/50m 5 Layer Agriculture Spray Hose Pipe Roll is a premium quality product from Kaveri. All Kaveri 8.5mmx100/50m 5 Layer Agriculture Spray Hose Pipe Roll are manufactured by using quality assured material and advanced techniques, which make them up to the standard in this highly challenging field. The materials utilized to manufacture Kaveri 8.5mmx100/50m 5 Layer Agriculture Spray Hose Pipe Roll, are sourced from the most reliable and official vendors, chosen after performing detailed market surveys. Kaveri products are widely acknowledged in the market for their high quality.",
      },
    ],
    Viricides: [
      {
        id: 21,
        name: " VEDAGNA VIRU (BIO VIRUS CONTROL)",
        price: 1426,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/Viru.jpg?v=1666098308",
        },
        description:
          "Viru is a formulation prepared using combination of biological and plant extracts fortified with several phyto-elicitors and amino acids of organic origin. Benefits: Imparts resistance to plants withstanding viral borne diseases with its unique systemic properties. Protects both prophylactically and curatively. Dosage: 2.5 gram per liter.",
      },
      {
        id: 22,
        name: "NO VIRUS (BIO VIRICIDE)",
        price: 319,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/files/2_bdc80f32-4dca-4d6c-9c7b-f75b05d3014e_1800x1800.webp?v=1694168478",
        },
        description:
          "No-Virus is an effective anti-viral product to protect crops from all types of viral diseases.",
      },
      {
        id: 23,
        name: "TERRA VIROKILL (BIO VIRICIDE)",
        price: 400,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/virokill_1800x1800.jpg?v=1611399749",
        },
        description:
          "It is a unique herbal formulation especially made for control of Viral disease in plant.Effective in controlling disease such as Leaf mosaic, Bunchy top, Leaf curl and other viral disease.Do not disturbs the fertility of soil,Control viral diseases in Chilly, Brinjal, Tobacco, Beans, Cucumber and other vegetable crops etc.,Positive effect on plant growth and root development,New generation organic formulation,Very low dosages,No Negative effects on beneficial organism, humans and farm animal, Zero Residue post application, Non-toxic ,100 % Organic",
      },
      {
        id: 24,
        name: "VC 100 BIO VIRICIDE",
        price: 950,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/vc-100-product-images-orvyiif1wr1-p596770199-0-202212310329_1800x1800.png?v=1676007111",
        },
        description:
          "VC-100 is a bio product made from various organic compounds, several herbs and various salty and acidic ingredients.",
      },
      {
        id: 25,
        name: "SUSTHIRA VIRTUE - ANTI VIRUS KIT BIO VIRICIDE",
        price: 775,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/files/VirtueBig_MuskanChauhan_1800x1800.png?v=1692885827",
        },
        description:
          "Virtue is a bio-viricide which protects all crops from various viruses.Virtue is a TRIPLE ACTION Anti-Viral Weapon that Controls Viruses, Gives Immunity and Helps in new growth",
      },
      {
        id: 26,
        name: "LINNFIELD FIXQR 5000 - NANO TECH STICKER AND SPREADER",
        price: 856,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/fixqr5000_1800x1800.jpg?v=1608985972",
        },
        description:
          "A product with antibiotic characteristic feature of penetrating deeper in the plant parts.Helping the product to perform in a much energetic way for suppressing the infestation by killing the bacteria.Giving a clean system to plants for growth.Gives a new life to plant for better fruiting.",
      },
    ],
    Fungicides: [
      {
        id: 27,
        name: "RIDOMIL GOLD FUNGICIDE",
        price: 200,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/files/krisikart.com-2022-12-19T223508.278_11zon-e1674582118975_1800x1800.jpg?v=1691049048",
        },
        description:
          "RIDOMIL GOLD controls soil and leaf diseases in a number of crops including vegetables, grapes, citrus, potatoes,ornamentals,tobacco and cotton. RIDOMIL GOLD is a highly effective fungicide for the control of Oomycete fungi (including late blight and Downy mildew).",
      },
      {
        id: 28,
        name: "INDOFIL M45 FUNGICIDE",
        price: 135,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/indofil_1800x1800.jpg?v=1680086309",
        },
        description:
          "Indofil M-45 is a contact fungicide of Di thiocarbamate group, which checks the growth of fungus and spread of diseases. It reduces the activity of enzymes in fungus which in turn reduces the energy production and finally results in death of the fungus.",
      },
      {
        id: 29,
        name: "NATIVO FUNGICIDE",
        price: 150,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/1_4_0e1a9088-d5be-4092-94fa-e023e1a25fc8_1800x1800.webp?v=1671454530",
        },
        description:
          "Nativo fungicide is a new combination containing Tebuconazole and Trifloxystrobin.Nativo is a systemic broad-spectrum fungicide with protective curative preventive, curative and eradicative fungicide in water-dispersible granule to control diseases and also improves quality and yield of crop. In rice, it improves the yield quality by reducing incidence of dirty panicle in later crop stages.",
      },
      {
        id: 30,
        name: "DHANUKA M45 FUNGICIDE",
        price: 160,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/m45_1800x1800.webp?v=1680088852",
        },
        description:
          "Dhanuka M-45 Fungicide (Mancozeb 75% WP) is a contact fungicide of Dithiocarbamate group, which checks the growth of fungus and spread of diseases. It reduces the activity of enzymes in fungus which in turn reduces the energy production and finally results in death of the fungus.",
      },
      {
        id: 31,
        name: "ACROBAT FUNGICIDE",
        price: 710,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/8_1800x1800.webp?v=1671426026",
        },
        description:
          "Acrobat is a systemic fungicide containing Dimethomorph.It is used for treating downy mildew and Late blight caused by organisms such as Pythium and Phytophthora species.",
      },
      {
        id: 32,
        name: "CONTAF PLUS FUNGICIDE",
        price: 190,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/1_4_3dea9b7d-8145-4dae-9735-9ce27dff01b4_1800x1800.webp?v=1671708929",
        },
        description:
          "Contaf Plus is a systemic triazole fungicide. Contaf Plus has broad-spectrum action against ascomycetes, basidiomycetes and fungi imperfection. Contaf Plus is ergosterol biosynthesis inhibitor thereby controlling growth and reproduction of plant fungal pathogens. It is useful for controlling Powdery mildew, Rust and Leaf spots in cereals, oil crops, horticultural and plantation crops and also for the effective control of Rice Sheath Blight.",
      },
    ],

    Nutrients: [
      {
        id: 33,
        name: "GENERAL LIQUID MICRO NUTRIENT",
        price: 110,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/1_14_29550538-a7cd-4a7e-bb89-a7213d3f8c97_1800x1800.webp?v=1672052747",
        },
        description:
          "High yielding varieties with short duration will encounter more nutrients deficiency which might occur for reasons beyond the control of farmers, resulting in decreased yield of high yielding crops.The application of Multiplex General Liquid will initiate flowering, improves the setting up of flowers, correct the deficiencies by eliminating the hidden hunger and develops resistances against diseases, which lead to increased yield.",
      },
      {
        id: 34,
        name: "MULTIMAX NUTRIENT",
        price: 347,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/MULTIMAX-NUTRIENT_2f0723d1-9e25-4579-9d5e-e3cc0f81d0a7_1800x1800.jpg?v=1601732890",
        },
        description:
          "This contains micronutrients like Zinc, Manganese, Iron, Copper, Boron & Molybdenum in 100 % water soluble form.This is in powder form and helps to correct deficiencies of the above-mentioned nutrients at critical stages of growth and development of crop.It helps in seed & fruit setting and increases yield. It is suitable for all crops",
      },
      {
        id: 35,
        name: "SURPLUS MICRO NUTRIENTS FERTILIZER",
        price: 310,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/Artboard5_1800x1800.webp?v=1672899170",
        },
        description:
          "Zinc, Magnesium, Copper, Manganese, Iron, Molybdenum and Boron",
      },
      {
        id: 36,
        name: "ANSHUL POTATO SPECIAL MULTI MICRO NUTRIENTS FERTILIZER",
        price: 399,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/Screenshot2021-08-30at18-00-25ANSHULPOTATO_d5c8ebe1-657a-4134-b7a3-6108a9620232_1800x1800.png?v=1630413325",
        },
        description:
          "ANSHUL POTATO SPECIAL contains all secondary nutrients such as Calcium, Magnesium, Sulphur, and micronutrients like Zinc, Boron, Manganese, Iron, and Molybdenum in optimum quantity.",
      },
      {
        id: 37,
        name: "TAPAS PUSHTI ALL PLANT NUTRIENT MIX POWDER | BIGHAAT BRAND",
        price: 299,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/Tapas-APNS-Powder_1800x1800.jpg?v=1620997301",
        },
        description:
          "Tapas Pushti All Plant Nutrient Mix Powder is a novel soil broadcasting supplement for enriching soil with organically rich humus.",
      },
      {
        id: 38,
        name: "GEOLIFE BALANCE NUTRI (MULTI MICRO NUTRIENT)",
        price: 1270,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/balancegl_1800x1800.jpg?v=1620274130",
        },
        description:
          "It is exclusively for meeting the requirement of various crops in different growth stage.",
      },
    ],

    Seeds: [
      {
        id: 39,
        name: "SAAHO TOMATO SEEDS [TO-3251]",
        price: 1003,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/Sahoo_1800x1800.jpg?v=1671198625",
        },
        description:
          "CHARACTERISTICS:\n Yield- Average yield: 25-40 MT/acre ( depending on season and cultural practice)Size- Round ShapeShape- Flat Round type, uniform greenWeight- 80-100g \n\n FEATURES: \n Determinate Plant,Good Stay greenness,Dark green foliage,Good Heat set,Very Good Firm Fruits,High Yield potential ",
      },
      {
        id: 40,
        name: "TEJASWINI CHILLI",
        price: 535,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/files/TEJASWANI_1800x1800.jpg?v=1682492541",
        },
        description:
          "Seed Specifications: \n Dual - With the best export quality and high capsaicin & industrial value, this short length variety has a shiny dark red color.\n Fruit Color : (Immature, Mature) : Dark Green, Glossy Red \n Fruit length : 8 - 9 cm \n Fruit Diameter : 0.7 - 0.9 cm \n Fruit Surface : Moderate Wrinkles \n Fruit Pungency : Very High",
      },
      {
        id: 41,
        name: "SARPAN F1 BRINJAL-25 (SEEDS)",
        price: 221,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/SARPAN-F1-BRINJAL-25_0a18e229-3e62-41a8-b497-93d9782a60a6_1800x1800.jpg?v=1601734440",
        },
        description:
          "Plant type and habit : Compact profuse branching, prolific bearer. All season \n Plant Height : 80-90 cm. \n Fruit features : High round fruits, green purple striped, spiny, shiny, low seeded. Solitary fruiting. \n Fruit weight : Medium size high round fruits-70-80 gm. \n Special features : Very tasty fruits with low seed content, excellent flavour in fruits among all brinjal hybrids in Market .Suitable for stuffing and cut vegetable preparation. Fruits are firm. Even fully grown up fruit will be tender with less seeds.",
      },
      {
        id: 42,
        name: "MADHURAJA MUSKMELON SEEDS",
        price: 707,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/Artboard1copy16-10_1800x1800.webp?v=1674652630",
        },
        description:
          "Specifications: \n Extremely attractive round with stripes, sturdy, healthy and dense plant.Madhuras type fruit Maturity of 55 to 60 days (5 to 7 days earlier than madhuras) Fruit weight - 1.0 to 1.25 Kgs Good flesh color and aroma Mild netted with medium cavity 12 to 15% TSS Excellent bearing",
      },
      {
        id: 43,
        name: "NS 22 CABBAGE",
        price: 245,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/files/Namdhari-ns22-sw_720x720_dc46354e-e360-4581-9a7a-90c2220cfea0_1800x1800.webp?v=1691395238",
        },
        description:
          "Features: \n Vigorous plant with blue green leaves Head is round, attractive green, and compact Suitable for Hot and Humid climate Maturity- 65 to 80 days after planting Average Head weight: 1.5-2.0 kg",
      },
      {
        id: 44,
        name: "MALAV NASIK RED ONION SEEDS N-53",
        price: 310,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/1_23_1800x1800.webp?v=1671453258",
        },
        description:
          "Nasik Red Onion Is Red Color.Oldest variety, Sowing Round The Year. Excellent Keeping Quality Onion requires well drained loamy soils, rich in humus, with fairly good content of potash. An ideal soil should have pH in between 6.5 to 8",
      },
    ],
    Insecticides: [
      {
        id: 45,
        name: "CORAGEN INSECTICIDE",
        price: 182,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/files/13_8ddb5ced-254d-4cbc-94a7-e35253bb8193_1800x1800.webp?v=1689403734",
        },
        description:
          "ABOUT PRODUCT : \n insecticide is an anthranilic diamide Broad Spectrum insecticide in the form of a suspension concentrate. \n insecticide is particularly active on Lepidopteran insect pests, primarily as a larvicide. \n insecticide is powered by active ingredient Rynaxypyr® active which has a unique mode of action that controls pests resistant to other insecticides. \n insecticide is selective & safe for non-target arthropods and conserves natural parasitoids, predators and pollinators.",
      },
      {
        id: 46,
        name: "LANCER GOLD INSECTICIDE",
        price: 1010,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/Lancergold_1800x1800.webp?v=1680155355",
        },
        description:
          "Lancer Insecticide is designed to help vegetable farmers control multiple insect pests cost-effectively. It is a combination of two systemic insecticides from different classes.",
      },
      {
        id: 47,
        name: "PLESIVA INSECTICIDE",
        price: 1690,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/files/plesiva-420x420_1800x1800.webp?v=1692430377",
        },
        description:
          "Cyantraniliprole is a novel anthranilic diamide insecticide effective against a cross specturm of chewing and sucking pests.it is systemic insceticide. Diafenthiuron is a non systemic insecticide, which kills larvae, nmphs and adults by contact action.",
      },
      {
        id: 48,
        name: "BACF WERTISPHERE (INSECTICIDE)",
        price: 516,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/Wertishere_jpeg_1800x1800.png?v=1658129693",
        },
        description:
          "Foliar Spray – Mix Wertisphere 8 – 10 gm. per liter of water, stir well to form uniform suspension and spray immediately on the target pest during early morning or evening hours by using high volume spray cover both sides of the leaves with spray solution",
      },
      {
        id: 49,
        name: "FERTERRA INSECTICIDE",
        price: 860,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/files/719k6OCGy6L._SX466_1800x1800.jpg?v=1683290266",
        },
        description:
          "Ferterra Insecticide powered by active ingredient Rynaxypyr® active is an anthranilic diamide insecticide in the granular form effective for borer control in Rice and Sugarcane crops. Ferterra Insecticide has a unique mode of action that controls pests that are resistant to other insecticides. It is selective and safe for non-target arthropods and conserves natural parasitoids, predators and pollinators. These attributes make Ferterra Insecticide an excellent tool for Integrated Pest Management (IPM) and provide growers greater flexibility in field operations. It is aimed at delivering high-quality produce that meets the demands of food retailers, exporters and consumers.",
      },
      {
        id: 50,
        name: "EKKA INSECTICIDE",
        price: 344,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/EKKA-INSECTICIDE_1800x1800.jpg?v=1601731806",
        },
        description:
          "Chemical composition: Acetamiprid 20% SP Blend of sodium dodecyl benzene Sulfonate sodium sulphate and alkylate 4.5 % w/w Sodium citrate dihydrate 30.0 % w/w Calcium hydrogen phosphate dihydrate 0.1 % w/w Colouring agent (Brilliant blue) 0.05 % w/w Lactose monohydrate Q.S. Total 100.0 % w/w. \n Mode of action: Systemic insecticide with translaminar activity and with contact and stomach action. Used to control of Hemiptera, especially aphids, Thysanoptera and Lepidoptera, by soil and foliar application, on a wide range of crops. \n chemicalName : Acetamiprid 20 % SP. \n Recommendation : It is soluble powder containing Acetamiprid ingredient 20 % w/w and balance other relevant ingredients. It is a systemic insecticide used to control aphids, jassids and whiteflies of cotton crop. \n Crop Common name of the pest a.i (gm) Formulation (gm) Dilution in water (litre) Waiting period (days) Cotton Aphids, jassids Whiteflies 10 20 50 100 500-600 15 Cabbage Aphids 15 75 500-600 7 Okra Aphids 15 75 500-600 3 Chilli Thrips 10-20 50-100 500-600 3 Rice Brown planthoppers 10-20 50-100 500-600 7. \n Plant protection equipment: Knapsack sprayer, foot sprayer, compression sprayer, compression knapsack battery sprayer and HTP power sprayer. \n Phytotoxicity: The product is not toxic when used in field as per recommedation. \n Dosage: 40Gm/acre with 200 Lts of Water",
      },
    ],

    Pesticides: [
      {
        id: 51,
        name: "AMRUTH ALMAX LIQUID (BIO PESTICIDE) (एम्रुथ ऐलमैक्स द्रव)",
        price: 207,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/ALMAX_1800x1800.jpg?v=1632996867",
        },
        description:
          "BENEFITS: \n Almax helps to increase productivity by improving crop health through containing the pests. Almax helps to maintain ecological balance \n Helps to improve the soil health. \n TARGET PEST: \n Aphids, Whiteflies, Mealybugs, Psyllids ,Chinch bug, Lygus bugs, Grasshoppers, Stink bugs (Halyomorpha halys), Thrips, Termites, Fire ants ,Flies Stem borers, Fungal gnats , Shore flies , Beetles- Bark beetle, Black vine ,weevil Boll ,weevil Cereal, leaf beetle ,Coffee borer beetle, Colorado potato beetle, Emerald ash borer , Red palm weevil, Strawberry root weevil , Caterpillars- Codling moth, Douglas fir tussock moth ,European corn borer, Invasive silkworms ,Apple clearwing moth & Mites",
      },
      {
        id: 52,
        name: "KATYAYANI ACTIVATED NEEM OIL BIO PESTICIDE (एक्टिवेटेड नीम ऑइल जैव कीटनाशक)",
        price: 267,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/DSC_0297-resize-scaled_1800x1800.jpg?v=1681232668",
        },
        description:
          "It is an cost effective New Technology 100% Organic Activated Neem Oil for plants with FAST RESULTS .It acts as a Insecticide / Fungicide / Miticide and is emulsifiable eco friendly and biodegradable. \n It Contains Activated Neem oil which is effective for its 24 Hour – FAST Action as compared to regular oil because of its greater Penetration power. It is Specially Designed for all types of Plants Home Garden & Domestic uses in Kitchen etc. \n It contains Activated Azadirachtin which effectively Repels and Controls aphids , Spider mites , fleas , fungus gnats , whiteflies , mosquito Beetles , Moth larvae , Mushroom flies , Leafminers , Caterpillars , Locus t, Nematodes Japanese beetle Also Controls Plant Diseases Like black spot , powdery mildew anthracnose and rust fungi. \n For Indoor & Outdoor Use on Fruits, Vegetables, Nuts, Herbs, Spices, Roses, Houseplants, Flowers, Trees, Lawns and Shrubs Home Garden or at indoor areas in Kitchen or other areas.",
      },
      {
        id: 53,
        name: "ANSHUL BIO FINISH (BIO PESTICIDE)",
        price: 335,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/Biofinish_2_1800x1800.webp?v=1681363670",
        },
        description:
          "DESCRIPTION: \n Effective against Insect, Repellent, Anti-feedant with Ovicidal, Larvicidal action. But not an outright killer.\n Effective against large number of sucking and caterpillar pests such as Plant hoppers, Aphids, Psyllids, White flies, Scale insects, Thrips, Gall midges, Fruit flies, Leaf eating insects, Stem borers, Pod/ Fruit borers in plantation, Fruits, Vegetables and cereals crops.\n It is a broad spectrum bio-pesticide containing active ingredients derived from different plants.",
      },
      {
        id: 54,
        name: "MAXINEMOR (BIO PESTICIDE AZADIRACHTIN 1500 PPM)",
        price: 310,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/Maxinomor_1800x1800.jpg?v=1625039073",
        },
        description:
          "Active Ingredient : Neem seed Kernel based bio-pesticide containing AZADIRACHTIN 0.15% EC.",
      },
      {
        id: 55,
        name: "NIVSHAKTI YODHA (BIO PESTICIDE FOR THRIPS AND MITES)",
        price: 1500,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/1_a176329a-0139-42f4-a571-3b178c6ce7e9_1800x1800.jpg?v=1678803792",
        },
        description:
          "Yodha works excellent in controlling early stages of thrips and mites. It has given excellent result in chilli and other vegetable crops.",
      },
      {
        id: 56,
        name: "AJAY BIOTECH AGRONEEM 3000 PPM (PESTICIDE)",
        price: 700,
        image: {
          uri: "https://www.bighaat.com/cdn/shop/products/3000ppm_1800x1800.png?v=1661145106",
        },
        description:
          "Biofix AGRONEEM is a neem seed kernel EC formulation modern insecticide based on herbal extract of Neem i.e., Azadirachta Indica. It displays an array of effects on insects & thus protecting plants from prospective attacks. \n Benefits: Anti-feedant and repellent effect.It has an egg deterrent effect.It disrupts the growth and development of insects.Wide variety of insect pests in the orders of fruit borer,shoot borer,larval pests and sucking pests such as thrips, white fly, Aphids etc are controlled by the use of Agroneem.",
      },
    ],
  },
};
