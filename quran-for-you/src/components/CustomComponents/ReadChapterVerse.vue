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
          <c-flex direction="column" mx="1" w="100%">
            <c-flex w="100%"
              ><c-text class="filter-label">Chapters</c-text
              ><c-icon name="chevron-down" size="1.35vw" color="black" mx="1"
            /></c-flex>

            <c-flex
              class="filter-container"
              align="center"
              justify="space-around"
            >
              <c-text class="filter-value">Al-Fatihah</c-text>
              <c-text fontSize="18px">The Cow</c-text>
            </c-flex>
          </c-flex>
          <c-flex direction="column" mx="1">
            <c-flex align="center"
              ><c-text class="filter-label">Verse No</c-text
              ><c-icon name="chevron-down" size="18px" color="black"
            /></c-flex>

            <c-flex class="filter-container" w="7.5vw">
              <c-text class="filter-value">1 - 7</c-text>
            </c-flex>
          </c-flex>
          <c-flex direction="column" mx="1">
            <c-flex align="center"
              ><c-text class="filter-label">Language</c-text
              ><c-icon name="chevron-down" size="18px" color="black"
            /></c-flex>

            <c-flex class="filter-container" w="7.5vw">
              <c-text class="filter-value">EN</c-text>
            </c-flex>
          </c-flex>
          <c-flex direction="column" mx="1">
            <c-flex align="center"
              ><c-text class="filter-label">Font Size</c-text
              ><c-icon name="chevron-down" size="18px" color="black"
            /></c-flex>

            <c-flex class="filter-container" w="7.5vw">
              <c-text class="filter-value">18</c-text>
            </c-flex>
          </c-flex>
          <c-flex direction="column" mx="1" w="100%">
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
              <c-text class="filter-value"
                >Read introduction
                <c-icon name="chevron-down" size="18px" color="black" mx="1"
              /></c-text>
            </c-flex>
          </c-flex>
        </c-flex>
      </c-flex>

      <c-flex direction="column" mt="2vw">
        <c-flex justify="start"
          ><c-heading class="heading">Verse 1 - 7</c-heading></c-flex
        >
        <c-flex>
          <c-flex direction="column" py="1vw" pr="1vw">
            <c-text fontSize="24px" fontWeight="semibold" py="1vw">
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
          <c-flex direction="column" py="1vw" px="1.25vw">
            <c-text fontSize="24px" fontWeight="semibold" py="1vw">
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
        <c-flex justify="space-between">
          <c-heading class="heading">Commentary</c-heading>
          <c-button fontSize="1.25vw" variant-color="white" color="black"
            >Hide <c-icon name="chevron-down" color="black" mx="1"
          /></c-button>
        </c-flex>
        <c-text mt="1em">
          The best way to begin any task is in the name of God, the Lord, the
          Being who is the source of all blessings, and whose blessings and
          mercy are continually pouring upon His creation. To commence any
          undertaking in His name is to pray that God, in His infinite mercy,
          should come to one’s assistance and bring one’s work to a successful
          conclusion. This is man’s acknowledgement of the fact that he is God’s
          servant, and also brings divine assurance of success. The Quran has a
          special and characteristic way of expressing a believer’s inner
          sentiments in the most appropriate words. The invocation of God, in
          the opening chapter of the Quran, constitutes a supplication of this
          nature. The feelings which are naturally aroused in one after
          discovering the truth are expressed in these lines.
        </c-text>
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
  justify-content: space-around;
  border-radius: 1vw;
}
.filter-value {
  font-size: 1.15vw;
  font-weight: 600;
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
</style>
<script>
import { CFlex } from "@chakra-ui/vue";
import SubscribeForm from "@/components/Desktopview/Layout/SubscribeForm.vue";

export default {
  name: "ReadingChapters",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CFlex,
    SubscribeForm,
  },
};
</script>
