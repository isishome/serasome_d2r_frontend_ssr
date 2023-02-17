<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'stores/store'
import { useQuasar } from 'quasar'

const { locale, t } = useI18n()
const store = useStore()
const $q = useQuasar()

const layout = computed(() => $q.screen.lt.sm ? 'dense' : 'loose')
onMounted(() => {
  const imgs = document.querySelectorAll('.maps-wrap img')
  imgs.forEach(img => {
    store.addImage({ 'element': img, 'src': img.src })
  })
})
</script>

<template>
  <div class="maps-wrap word-keep">
    <template v-if="locale === 'ko-KR'">
      <q-timeline dense:layout="layout">
        <q-timeline-entry color="brown-5" side="left" icon="foundation">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Harrogath</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/harrogath01.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 퀘스트 할당을 위해 NPC와 대화</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="secondary" side="right" icon="grass">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Bloody Foothills</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/bloodyfoothills.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Shenk the Overseer</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="orange" side="left" icon="house_siding">
          <div class="row q-mb-lg">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Frigid Highlands</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/frigidhighlands.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Imprisoned Soldiers</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Abaddon</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Abaddon</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/abaddon.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-9" side="right" icon="door_open">
          <div class="q-mb-lg row">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Arreat Plateau</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/arreatplateau.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Pit of Acheron</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Pit of Acheron</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/acheron.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-5" side="left" icon="balcony">
          <div class="row q-mb-lg">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Crystalline Passage</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/crystallinepassage.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Frozen River</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Frozen River</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/frozenriver.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Anya</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold font-kodia" icon="flag">
          액트 V - 파트 I 완료
        </q-timeline-entry>
      </q-timeline>
      <q-timeline dense :layout="layout">
        <q-timeline-entry color="brown-5" side="left" icon="foundation">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Harrogath</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/harrogath02.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 퀘스트 할당을 위해 NPC와 대화</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="amber-8" side="right" icon="stairs">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Nihlathak's Temple</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/nihlathaktemple.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo-5" side="left" icon="door_open">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Halls of Anguish</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/hallsofanguish.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo-7" side="right" icon="door_open">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Halls of Pain</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/hallsofpain.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo-9" side="left" icon="door_open">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Halls of Vaught</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/hallsofvaught.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Nihlathak</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold font-kodia" icon="flag">
          액트 V - 파트 II 완료
        </q-timeline-entry>
      </q-timeline>
      <q-timeline dense :layout="layout">
        <q-timeline-entry color="blue-3" side="left" icon="balcony">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Crystalline Passage</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/crystallinepassage.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Frozen River</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-7" side="right" icon="balcony">
          <div class="row q-mb-lg">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Glacial Trail</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/glacialtrail.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Drifter Cavern</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Drifter Cavern</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/driftercavern.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-5" side="left" icon="lens_blur">
          <div class="row q-mb-lg">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Frozen Tundra</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/frozentundra.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Infernal Pit</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Infernal Pit</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/infernalpit.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-8" side="right" icon="balcony">
          <div class="row q-mb-lg">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">The Ancients' Way</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/ancientsway.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Icy Cellar</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Icy Cellar</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/icycellar.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="brown-8" side="left" icon="landscape">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Arreat Summit</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/arreatsummit.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Altar of the Heavens</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="right" icon="door_open">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Worldstone Keep</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/worldstonekeep.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음 (2층)</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-8" side="left" icon="door_open">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Throne of Destruction</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/throneofdestruction.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Baal's Minions</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="secondary" side="right" icon="door_open">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">The Worldstone Chamber</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/worldstonechamber.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Baal</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold font-kodia" icon="flag">
          액트 V - 파트 III 완료
        </q-timeline-entry>
      </q-timeline>
    </template>
    <template v-if="$i18n.locale === 'en-US'">
      <q-timeline dense :layout="layout">
        <q-timeline-entry color="brown-5" side="left" icon="foundation">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Harrogath</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/harrogath01.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Speak to NPCs for Quest Assignments</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="secondary" side="right" icon="grass">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Bloody Foothills</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/bloodyfoothills.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Shenk the Overseer</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="orange" side="left" icon="house_siding">
          <div class="row q-mb-lg">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Frigid Highlands</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/frigidhighlands.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Imprisoned Soldiers</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Abaddon</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Abaddon</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/abaddon.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-9" side="right" icon="door_open">
          <div class="q-mb-lg row">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Arreat Plateau</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/arreatplateau.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Pit of Acheron</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Pit of Acheron</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/acheron.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-5" side="left" icon="balcony">
          <div class="row q-mb-lg">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Crystalline Passage</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/crystallinepassage.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Frozen River</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Frozen River</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/frozenriver.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Anya</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold font-kodia" icon="flag">
          Act V - Part I Completed
        </q-timeline-entry>
      </q-timeline>
      <q-timeline dense :layout="layout">
        <q-timeline-entry color="brown-5" side="left" icon="foundation">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Harrogath</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/harrogath02.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Speak to NPCs for Quest Assignments</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="amber-8" side="right" icon="stairs">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Nihlathak's Temple</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/nihlathaktemple.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo-5" side="left" icon="door_open">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Halls of Anguish</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/hallsofanguish.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo-7" side="right" icon="door_open">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Halls of Pain</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/hallsofpain.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo-9" side="left" icon="door_open">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Halls of Vaught</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/hallsofvaught.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Nihlathak</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold font-kodia" icon="flag">
          Act V - Part II Completed
        </q-timeline-entry>
      </q-timeline>
      <q-timeline dense :layout="layout">
        <q-timeline-entry color="blue-3" side="left" icon="balcony">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Crystalline Passage</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/crystallinepassage.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Frozen River</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-7" side="right" icon="balcony">
          <div class="row q-mb-lg">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Glacial Trail</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/glacialtrail.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Drifter Cavern</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Drifter Cavern</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/driftercavern.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-5" side="left" icon="lens_blur">
          <div class="row q-mb-lg">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Frozen Tundra</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/frozentundra.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Infernal Pit</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Infernal Pit</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/infernalpit.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-8" side="right" icon="balcony">
          <div class="row q-mb-lg">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">The Ancients' Way</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/ancientsway.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Icy Cellar</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Icy Cellar</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/icycellar.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="brown-8" side="left" icon="landscape">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Arreat Summit</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/arreatsummit.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Altar of the Heavens</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="right" icon="door_open">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Worldstone Keep</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/worldstonekeep.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : 3</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes (on Level 2)</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-8" side="left" icon="door_open">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Throne of Destruction</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/throneofdestruction.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Baal's Minions</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="secondary" side="right" icon="door_open">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">The Worldstone Chamber</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act5/worldstonechamber.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Baal</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold font-kodia" icon="flag">
          Act V - Part III Completed
        </q-timeline-entry>
      </q-timeline>
    </template>
    <p class="q-mt-xl text-right text-grey-6" :class="$q.screen.lt.md ? 'text-caption' : ''">
      {{ t('d2r.knowledge.source') }} :
      <a style="text-decoration: none;" target="_blank" href="http://classic.battle.net/diablo2exp/maps/act5.shtml">{{
        t('d2r.knowledge.arreatSummit')
      }}</a>
    </p>
  </div>
</template>

<style scoped>

</style>