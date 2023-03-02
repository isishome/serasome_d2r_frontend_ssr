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
                <div class="text-h6 text-primary">Kurast Docks</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/KurastDocks.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 퀘스트 할당을 위해 NPC와 대화</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" side="right" icon="park">
          <div class="q-mb-lg row">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Spider Forest</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/SpiderForest.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Jade Figurine</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Arachnid Lair</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="q-mb-lg row">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Spider Cavern</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/SpiderCavern.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : 1</div>
                <div>퀘스트 관련 영역 / 몬스터 : Khalim's Eye</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Great Marsh</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/GreatMarsh.jpg" width="100%" />
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
        <q-timeline-entry color="grey-9" side="left" icon="door_open">
          <div class="row q-mb-lg">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Flayer Jungle</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/FlayerJungle.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : The Gidbinn</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Swampy Pit (3층)</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Flayer Dungeon</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/FlayerDungeon.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : Khalim's Brain</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo-10" side="right" icon="fort">
          <div class="q-mb-lg row">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Lower Kurast</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/LowerKurast.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="q-mb-lg row">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Kurast Bazaar</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/KurastBazaar.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Disused Fane - Ruined Temple</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Sewers</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/Sewers.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : 2</div>
                <div>퀘스트 관련 영역 / 몬스터 : Khalim's Heart</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-6" side="left" icon="house_siding">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Upper Kurast</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/UpperKurast.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : Forgotten Temple - Forgotten Reliquary</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="brown-5" side="right" icon="door_open">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Kurast Causeway</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/KurastCauseway.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : Disused Reliquary - Ruined Fane</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-7" side="left" icon="line_style">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Travincal</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/Travincal.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Khalim's Flail - The Compelling Orb</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="secondary" side="right" icon="line_style">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Durance of Hate</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/DuranceofHate.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : Mephisto</div>
                <div>웨이포인트 : 있음 (2층)</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold" icon="flag">
          액트 III 완료
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
                <div class="text-h6 text-primary">Kurast Docks</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/KurastDocks.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Speak to NPCs for Quest Assignments</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" side="right" icon="park">
          <div class="q-mb-lg row">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Spider Forest</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/SpiderForest.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Jade Figurine</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Arachnid Lair</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="q-mb-lg row">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Spider Cavern</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/SpiderCavern.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : 1</div>
                <div>Quest Related Areas / Monsters : Khalim's Eye</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Great Marsh</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/GreatMarsh.jpg" width="100%" />
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
        <q-timeline-entry color="grey-9" side="left" icon="door_open">
          <div class="row q-mb-lg">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Flayer Jungle</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/FlayerJungle.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : The Gidbinn</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Swampy Pit (3 Levels)</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Flayer Dungeon</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/FlayerDungeon.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : 3</div>
                <div>Quest Related Areas / Monsters : Khalim's Brain</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="indigo-10" side="right" icon="fort">
          <div class="q-mb-lg row">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Lower Kurast</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/LowerKurast.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="q-mb-lg row">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Kurast Bazaar</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/KurastBazaar.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Disused Fane - Ruined Temple</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Sewers</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/Sewers.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : 2</div>
                <div>Quest Related Areas / Monsters : Khalim's Heart</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-6" side="left" icon="house_siding">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Upper Kurast</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/UpperKurast.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Forgotten Temple - Forgotten Reliquary</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="brown-5" side="right" icon="door_open">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Kurast Causeway</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/KurastCauseway.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : Disused Reliquary - Ruined Fane</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-7" side="left" icon="line_style">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Travincal</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/Travincal.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Khalim's Flail - The Compelling Orb</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="secondary" side="right" icon="line_style">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Durance of Hate</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act3/DuranceofHate.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : 3</div>
                <div>Quest Related Areas / Monsters : Mephisto</div>
                <div>Waypoint : Yes (on Level 2)</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold" icon="flag">
          Act III Completed
        </q-timeline-entry>
      </q-timeline>
    </template>
    <p class="q-mt-xl text-right text-grey-6" :class="$q.screen.lt.md ? 'text-caption' : ''">
      {{ t('d2r.knowledge.source') }} :
      <a style="text-decoration: none;" target="_blank" href="http://classic.battle.net/diablo2exp/maps/act3.shtml">{{
        t('d2r.knowledge.arreatSummit')
      }}</a>
    </p>
  </div>
</template>

<style scoped></style>