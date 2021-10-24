<template>
  <mq-layout mq="desktop">
    <c-flex class="container">
      <c-flex justify="space-between" mb="1vw">
        <c-heading class="heading" mb="1.25vw">Quran Chapter 1</c-heading>
        <c-flex justify="space-between">
          <c-flex align="center" justify="center" mx="2">
            <c-switch color="black" size="lg" />
          </c-flex>
          <c-flex class="sbd-container">
            <c-link as="router-link" to="/">
              Share
            </c-link>
            <c-image :src="require(`@/assets/share.png`)" class="icons-sbd" />
          </c-flex>
          <c-flex class="sbd-container">
            <c-link as="router-link" to="/">
              Bookmark
            </c-link>
            <c-image
              :src="require(`@/assets/bookmark.png`)"
              class="icons-sbd"
            />
          </c-flex>
          <c-flex class="sbd-container">
            <c-link as="router-link" to="/">
              Download
            </c-link>
            <c-image
              :src="require(`@/assets/download.png`)"
              class="icons-sbd"
            />
          </c-flex>
        </c-flex>
      </c-flex>
      <c-flex direction="column" w="100%">
        <c-flex w="100%">
          <c-flex direction="column" mx="1" w="25%">
            <c-flex w="100%"
              ><c-text class="filter-label">Chapters</c-text
              ><c-icon name="chevron-down" size="1.35vw" color="black" mx="1"
            /></c-flex>
            <c-select
              class="filter-container custom-select"
              placeholder="Al-Fatihah The Cow"
            >
              <option value="Al-Fatihah The Cow"
                ><c-text class="filter-value"
                  >Al-Fatihah The Cow</c-text
                ></option
              >
            </c-select>
          </c-flex>
          <c-flex direction="column" mx="1" w="10%">
            <c-flex align="center"
              ><c-text class="filter-label">Verse No</c-text
              ><c-icon name="chevron-down" size="18px" color="black"
            /></c-flex>

            <c-select
              class="filter-container custom-select"
              placeholder="1 - 7"
            >
              <option value="1 - 7">1 - 7</option>
              <option value="1 - 7">1 - 7</option>
              <option value="1 - 7">1 - 7</option>
              <option value="1 - 7">1 - 7</option>
              <option value="1 - 7">1 - 7</option>
              <option value="1 - 7">1 - 7</option>
            </c-select>
          </c-flex>
          <c-flex direction="column" mx="1" w="10%">
            <c-flex align="center"
              ><c-text class="filter-label">Language</c-text
              ><c-icon name="chevron-down" size="18px" color="black"
            /></c-flex>

            <c-select class="filter-container custom-select" placeholder="EN">
              <option value="EN">EN</option>
              <option value="EN">EN</option>
              <option value="EN">EN</option>
              <option value="EN">EN</option>
              <option value="EN">EN</option>
              <option value="EN">28</option>
            </c-select>
          </c-flex>
          <c-flex direction="column" mx="1" w="10%">
            <c-flex align="center"
              ><c-text class="filter-label">Font Size</c-text
              ><c-icon name="chevron-down" size="18px" color="black"
            /></c-flex>

            <c-select class="filter-container custom-select" placeholder="18">
              <option value="18">18</option>
              <option value="20">20</option>
              <option value="20">22</option>
              <option value="20">24</option>
              <option value="20">26</option>
              <option value="20">28</option>
            </c-select>
          </c-flex>
          <c-flex direction="column" mx="1" w="15%">
            <c-flex align="center"
              ><c-text class="filter-label">View Options</c-text
              ><c-icon name="chevron-down" size="18px" color="black"
            /></c-flex>

            <c-select
              class="filter-container custom-select"
              placeholder="Parallel"
            >
              <option value="parallel">Parallel</option>
              <option value="paragraph">Paragraph</option>
            </c-select>
          </c-flex>
          <c-flex direction="column" mx="1" w="42.5%">
            <c-text class="filter-label">Search</c-text>
            <c-flex class="filter-container" w="100%" p="3">
              <c-input-group w="100%">
                <c-input-left-element
                  ><c-image :src="require(`@/assets/search.png`)" size="16px"
                /></c-input-left-element>
                <c-input type="text" placeholder="Search chapter, verse" />
              </c-input-group>
            </c-flex>
          </c-flex>
        </c-flex>
        <c-flex my="1vw" w="100%">
          <c-flex direction="column" mx="1" w="80%">
            <c-flex class="filter-container" w="100%">
              <c-text class="filter-value">Audio</c-text>
              <c-text class="filter-value"
                >EN <c-icon name="chevron-down" size="18px" color="black"
              /></c-text>
              <c-icon
                name="chevron-right"
                bg="black"
                borderRadius="50%"
                color="white"
                size="25px"
              />
              <c-divider border-color="gray.500" w="75%" borderWidth="5px" />
            </c-flex>
          </c-flex>
          <c-flex direction="column" mx="1" w="20%">
            <c-flex class="filter-container" w="100%">
              <c-text class="filter-value">Read Introduction</c-text>
            </c-flex>
          </c-flex>
        </c-flex>
      </c-flex>

      <c-flex direction="column" mt="2vw">
        <c-flex justify="start"
          ><c-heading class="heading">Verse 1 - 7</c-heading></c-flex
        >
        <c-flex w="100%">
          <c-flex direction="column" py="1vw" w="50%">
            <c-text fontSize="24px" fontWeight="semibold" py="0.5vw">
              EN
            </c-text>
            <c-text>
              1 In the name of God, the Most Gracious, the Most Merciful 2 All
              praise is due to God, the Lord of the Universe; 3 the Beneficent,
              the Merciful; 4 Lord of the Day of Judgement. 5 You alone we
              worship, and to You alone we turn for help. 6 Guide us to the
              straight path: 7 the path of those You have blessed; not of those
              who have incurred Your wrath, nor of those who have gone astray.
            </c-text>
          </c-flex>
          <c-divider
            orientation="vertical"
            borderWidth="5px"
            borderColor="palettes.primary"
          />
          <c-flex direction="column" py="1vw" px="1.25vw" w="50%">
            <c-text fontSize="24px" fontWeight="semibold" py="0.5vw">
              EN
            </c-text>
            <c-text>
              1 In the name of God, the Most Gracious, the Most Merciful 2 All
              praise is due to God, the Lord of the Universe; 3 the Beneficent,
              the Merciful; 4 Lord of the Day of Judgement. 5 You alone we
              worship, and to You alone we turn for help. 6 Guide us to the
              straight path: 7 the path of those You have blessed; not of those
              who have incurred Your wrath, nor of those who have gone astray.
            </c-text>
          </c-flex>
        </c-flex>
      </c-flex>

      <c-flex direction="column" mt="3vw">
        <c-accordion :allow-toggle="true">
          <c-accordion-item>
            <c-accordion-header px="0" py="1vw">
              <c-box flex="1" text-align="left">
                <c-heading class="heading">Commentary</c-heading>
              </c-box>
              <c-button fontSize="1.25vw" variant-color="white" color="black"
                >Hide <c-accordion-icon
              /></c-button>
            </c-accordion-header>
            <c-accordion-panel px="0">
              <c-text mt="1em">
                The best way to begin any task is in the name of God, the Lord,
                the Being who is the source of all blessings, and whose
                blessings and mercy are continually pouring upon His creation.
                To commence any undertaking in His name is to pray that God, in
                His infinite mercy, should come to one’s assistance and bring
                one’s work to a successful conclusion. This is man’s
                acknowledgement of the fact that he is God’s servant, and also
                brings divine assurance of success. The Quran has a special and
                characteristic way of expressing a believer’s inner sentiments
                in the most appropriate words. The invocation of God, in the
                opening chapter of the Quran, constitutes a supplication of this
                nature. The feelings which are naturally aroused in one after
                discovering the truth are expressed in these lines.
              </c-text>
            </c-accordion-panel>
          </c-accordion-item>
        </c-accordion>
      </c-flex>

      <c-flex my="2vw" direction="column">
        <c-heading class="heading" my="1vw">Related Media</c-heading>
        <c-simple-grid :columns="3" :spacing="5">
          <Tile
            image="images/reading"
            title="Title/ Article"
            subTitle="Sub-text"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ipsum lorem pretium convallis."
          />
          <Tile
            image="images/reading"
            title="Title/ Article"
            subTitle="Sub-text"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ipsum lorem pretium convallis."
          />
          <Tile
            image="images/reading"
            title="Title/ Article"
            subTitle="Sub-text"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ipsum lorem pretium convallis."
          />
        </c-simple-grid>
      </c-flex>

      <c-flex class="subscribe-form-container">
        <SubscribeForm />
      </c-flex>
    </c-flex>
  </mq-layout>
</template>
<style>
.filter-label {
  font-size: 1vw;
  font-weight: 900;
}
.filter-container {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  height: 5vw;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 1vw;
}
.filter-container > select {
  text-align: center;
  font-size: 1vw;
  font-weight: 900;
  padding-left: 0;
  padding-right: 0;
  height: 100%;
  border-radius: 1vw;
}
.filter-value {
  font-size: 1.15vw;
  font-weight: 600;
  text-align: center;
}
.icons-sbd {
  object-fit: contain;
  width: 1vw;
  height: 1vw;
  margin-left: 0.5vw;
}
.sbd-container {
  justify-content: center;
  margin-left: 0.75vw;
  margin-right: 0.75vw;
  align-items: center;
}

.custom-select {
  display: flex;
  outline: none;
  padding: 0;
  margin: 0;
  border-color: #fff;
}

.reading-select {
  display: flex;
  outline: none;
  padding: 0;
  margin: 0;
  border-color: #fff;
}

.custom-select .css-1oh9bp8 {
  display: none;
}
</style>
<script>
import { CFlex, CAccordionIcon } from "@chakra-ui/vue";
import SubscribeForm from "@/components/Desktopview/Layout/SubscribeForm.vue";
import Tile from "@/components/CustomComponents/Tile.vue";

export default {
  name: "ReadingChapters",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CFlex,
    SubscribeForm,
    CAccordionIcon,
    Tile,
  },
};
</script>
