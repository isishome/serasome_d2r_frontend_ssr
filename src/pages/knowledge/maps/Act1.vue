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
      <q-timeline :layout="layout">
        <q-timeline-entry color="green" side="left" icon="grass">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">자매단 야영지</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/RogueEncampment.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 퀘스트 할당을 위해 NPC와 대화</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="secondary" side="right" icon="door_open">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">핏빛 황무지</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/BloodMoor.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Den of Evil</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : Den of Evil / Caves (퀘스트 1이 완료된경우)</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue" side="left" icon="landscape">
          <div class="row q-mb-lg">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">차가운 평야</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/ColdPlains.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가 구역 : Caves (2층)</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">매장지</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/BurialGrounds.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Blood Raven</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : The Crypt - The Mausoleum</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-5" side="right" icon="bar_chart">
          <div class="q-mb-lg row">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">바위 벌판</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/StoneyField.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Cairn Stones - Tower Tome</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가 구역 : The Underground Passage Entry</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">트리스트럼</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/Tristram.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Deckard Cain</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-8" side="left" icon="landscape">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">지하 통로</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/UndergroundPassage.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : 2</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-5" side="right" icon="castle">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">어둠숲</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/DarkWood.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Inifuss Tree</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="left" icon="castle">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">검은 습지</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/BlackMarsh.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : The Forgotten Tower (5층)</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가 구역 : The Hole (2층)</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-9" side="right" icon="grass">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">타모 고원</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/TamoeHighland.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : The Pit (2층)</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-9" side="left" icon="castle">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">수도원 정문</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/MonasteryGate.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-9" side="right" icon="grass">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">외부 회랑</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/OuterCloister.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-9" side="left" icon="castle">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">병영</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/Barracks.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : The Horadric Malus</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-10" side="right" icon="view_week">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">감옥</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/Jail.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음 (1층)</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" side="left" icon="grass">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">내부 회랑</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/InnerCloister.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="amber-10" side="right" icon="church">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">대성당</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/Cathedral.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="left" icon="castle">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">지하 묘지</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/Catacombs.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : 4</div>
                <div>퀘스트 관련 영역 / 몬스터 : Andariel (4층)</div>
                <div>웨이포인트 : 있음(2층)</div>
                <div>동굴 / 추가 구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold" icon="flag">액트 I 완료
        </q-timeline-entry>
      </q-timeline>
    </template>
    <template v-if="locale === 'en-US'">
      <q-timeline :layout="layout">
        <q-timeline-entry color="green" side="left" icon="grass">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Rogue Encampment</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/RogueEncampment.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Speak to NPCs for Quest Assignments</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="secondary" side="right" icon="door_open">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Blood Moor</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/BloodMoor.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Den of Evil</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : Den of Evil / Caves (if Quest I has been completed)</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue" side="left" icon="landscape">
          <div class="row q-mb-lg">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Cold Plains</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/ColdPlains.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Caves (2 Levels)</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Burial Grounds</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/BurialGrounds.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Blood Raven</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : The Crypt - The Mausoleum</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-5" side="right" icon="bar_chart">
          <div class="q-mb-lg row">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Stony Field</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/StoneyField.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Cairn Stones - Tower Tome</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : The Underground Passage Entry</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Tristram</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/Tristram.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Deckard Cain</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-8" side="left" icon="landscape">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">The Underground Passage</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/UndergroundPassage.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : 2</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-5" side="right" icon="castle">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Dark Wood</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/DarkWood.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Inifuss Tree</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="left" icon="castle">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Black Marsh</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/BlackMarsh.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : The Forgotten Tower (5 Levels)</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : The Hole (2 Levels)</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-9" side="right" icon="grass">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Tamoe Highland</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/TamoeHighland.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : The Pit (2 Levels)</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-9" side="left" icon="castle">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Monastery Gate</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/MonasteryGate.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-9" side="right" icon="grass">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Outer Cloister</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/OuterCloister.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-9" side="left" icon="castle">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Barracks</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/Barracks.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : The Horadric Malus</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-10" side="right" icon="view_week">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Jail</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/Jail.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : 3</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes (on Jail Level 1)</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" side="left" icon="grass">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Inner Cloister</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/InnerCloister.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="amber-10" side="right" icon="church">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Cathedral</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/Cathedral.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="left" icon="castle">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Catacombs</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act1/Catacombs.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : 4</div>
                <div>Quest Related Areas/Monsters : Andariel (on Catacombs Level 4)</div>
                <div>Waypoint : Yes (on Catacombs Level 2)</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold" icon="flag">
          Act I Completed
        </q-timeline-entry>
      </q-timeline>
    </template>
    <p class="q-mt-xl text-right text-grey-6" :class="$q.screen.lt.md ? 'text-caption' : ''">
      {{ t('d2r.knowledge.source') }} :
      <a style="text-decoration: none;" target="_blank" href="http://classic.battle.net/diablo2exp/maps/act1.shtml">{{
        t('d2r.knowledge.arreatSummit')
      }}</a>
    </p>
  </div>
</template>

<style scoped></style>