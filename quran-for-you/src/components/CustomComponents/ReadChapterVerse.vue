<template>
  <mq-layout mq="desktop">
    <c-flex direction="column" mt="1.5em" mx="8em">
      <c-flex justify="space-between" my="1.2em">
        <c-flex justify="center" align="center">
          <c-heading fontSize="48px">Quran chapter 1</c-heading>
        </c-flex>
        <c-flex justify="space-between">
          <c-flex align="center" justify="center" mx="2">
            <c-switch color="black" size="lg" />
          </c-flex>
          <c-flex align="center" justify="center" mx="2">
            <c-link as="router-link" to="/" mx="2">
              Share
            </c-link>
            <c-image :src="require(`@/assets/share.png`)" size="16px" />
          </c-flex>
          <c-flex align="center" justify="center" mx="2">
            <c-link as="router-link" to="/" mx="2">
              Bookmark
            </c-link>
            <c-image :src="require(`@/assets/bookmark.png`)" size="16px" />
          </c-flex>
          <c-flex align="center" justify="center" mx="2">
            <c-link as="router-link" to="/" mx="2">
              Download
            </c-link>
            <c-image :src="require(`@/assets/download.png`)" size="16px" />
          </c-flex>
        </c-flex>
      </c-flex>

      <c-flex direction="column">
        <c-flex>
          <c-flex direction="column" mx="1">
            <c-flex my="1"
              ><c-text fontSize="14px">Chapters</c-text
              ><c-icon name="chevron-down" size="18px" color="black" mx="1"
            /></c-flex>

            <c-flex
              boxShadow="0px 4px 15px rgba(0, 0, 0, 0.15)"
              w="335px"
              h="100px"
              align="center"
              justify="space-around"
            >
              <c-text fontSize="18px" fontWeight="600">Al-fatihah</c-text>
              <c-text fontSize="18px">The cow</c-text>
            </c-flex>
          </c-flex>
          <c-flex direction="column" mx="1">
            <c-flex my="1"
              ><c-text fontSize="14px">Verse no</c-text
              ><c-icon name="chevron-down" size="18px" color="black" mx="1"
            /></c-flex>

            <c-flex
              boxShadow="0px 4px 15px rgba(0, 0, 0, 0.15)"
              w="98px"
              h="100px"
              align="center"
              justify="space-around"
            >
              <c-text fontSize="18px" fontWeight="600">All</c-text>
            </c-flex>
          </c-flex>
          <c-flex direction="column" mx="1">
            <c-flex my="1"
              ><c-text fontSize="14px">Language</c-text
              ><c-icon name="chevron-down" size="18px" color="black" mx="1"
            /></c-flex>

            <c-flex
              boxShadow="0px 4px 15px rgba(0, 0, 0, 0.15)"
              w="98px"
              h="100px"
              align="center"
              justify="space-around"
            >
              <c-text fontSize="18px" fontWeight="600">EN</c-text>
            </c-flex>
          </c-flex>
          <c-flex direction="column" mx="1">
            <c-flex my="1"
              ><c-text fontSize="14px">Font size</c-text
              ><c-icon name="chevron-down" size="18px" color="black" mx="1"
            /></c-flex>

            <c-flex
              boxShadow="0px 4px 15px rgba(0, 0, 0, 0.15)"
              w="98px"
              h="100px"
              align="center"
              justify="space-around"
            >
              <c-text fontSize="18px" fontWeight="600">18</c-text>
            </c-flex>
          </c-flex>
          <c-flex direction="column" mx="1">
            <c-flex
              boxShadow="0px 4px 15px rgba(0, 0, 0, 0.15)"
              w="450px"
              h="100px"
              mt="28px"
              align="center"
              justify="space-around"
              p="3"
            >
              <c-input-group w="100%">
                <c-input-left-element
                  ><c-image :src="require(`@/assets/search.png`)" size="16px"
                /></c-input-left-element>
                <c-input type="text" placeholder="Search chapter, verse" />
              </c-input-group>
            </c-flex>
          </c-flex>
        </c-flex>
        <c-flex my="1em">
          <c-flex direction="column" mx="1">
            <c-flex
              boxShadow="0px 4px 15px rgba(0, 0, 0, 0.15)"
              w="800px"
              h="100px"
              align="center"
              justify="space-around"
            >
              <c-text fontSize="24px" fontWeight="600">Audio</c-text>
              <c-text fontSize="24px" fontWeight="600"
                >EN <c-icon name="chevron-down" size="18px" color="black" mx="1"
              /></c-text>
              <c-icon
                name="chevron-right"
                bg="black"
                borderRadius="50%"
                color="white"
                size="25px"
                mx="1"
              />
              <c-divider border-color="gray.500" w="500px" borderWidth="5px" />
            </c-flex>
          </c-flex>
          <c-flex direction="column" mx="1">
            <c-flex
              boxShadow="0px 4px 15px rgba(0, 0, 0, 0.15)"
              w="305px"
              h="100px"
              align="center"
              justify="space-around"
            >
              <c-text fontSize="18px" fontWeight="600"
                >Read introduction
                <c-icon name="chevron-down" size="18px" color="black" mx="1"
              /></c-text>
            </c-flex>
          </c-flex>
        </c-flex>
      </c-flex>

      <c-flex direction="column" mt="2em">
        <c-flex justify="start" my="1em"
          ><c-heading fontSize="32px">Verse 1 - 7</c-heading></c-flex
        >
        <c-flex mt="1em">
          <c-flex direction="column">
            <c-text fontSize="24px" fontWeight="semibold">
              EN
            </c-text>
            <c-text fontSize="18px" mt="1em">
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
          <c-flex direction="column" ml="1em">
            <c-text fontSize="24px" fontWeight="semibold">
              EN
            </c-text>
            <c-text fontSize="18px" mt="1em">
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

      <c-flex direction="column" mt="4em">
        <c-flex justify="space-between">
          <c-heading fontSize="36px">COMMENTARY</c-heading>
          <c-button fontSize="10px" variant-color="white" color="black"
            >Hide <c-icon name="chevron-down" color="black" mx="1"
          /></c-button>
        </c-flex>
        <c-text fontSize="18px" mt="1em">
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

      <c-flex direction="column" w="100%" my="4em">
        <SubscribeForm />
      </c-flex>
    </c-flex>
  </mq-layout>
</template>

<script>
import { Cflex, CSwitch } from "@chakra-ui/vue";
import SubscribeForm from "@/components/Desktopview/Layout/SubscribeForm.vue";

export default {
  name: "ReadingChapters",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    Cflex,
    SubscribeForm,
  },
};
</script>
