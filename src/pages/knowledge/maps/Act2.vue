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
        <q-timeline-entry color="yellow-9" side="left" icon="store">
          <div class="q-mb-lg row">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">루트 골레인</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/LutGholein.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 퀘스트 할당을 위해 NPC와 대화</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" side="left" icon="tools_ladder">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">하수도</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/Sewers.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : Radament - Horadric Scroll (3층)</div>
                <div>웨이포인트 : 있음 (2층)</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="yellow-9" side="right" icon="landscape">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">바위투성이 황무지</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/RockyWaste.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="yellow-10" side="left" icon="door_open">
          <div class="row q-mb-lg">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">메마른 언덕</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/DryHills.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">망자의 전당</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/HallsoftheDead.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : Horadric Cube (3층)</div>
                <div>웨이포인트 : 있음 (on Level 2)</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-5" side="right" icon="pest_control">
          <div class="q-mb-lg row">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">머나먼 오아시스</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/FarOasis.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">구더기 굴</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/MaggotLair.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : Staff of the Kings</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="left" icon="holiday_village">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">잊힌 도시</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/LostCity.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: Ancient Tunnels (1층)</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="orange-5" side="right" icon="fort">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">뱀의 골짜기</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/ValleyofSnakes.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Claw Viper Temple</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역: Claw Viper Temple (2층)</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold" icon="flag">액트 II - 파트 I
          완료
        </q-timeline-entry>
      </q-timeline>
      <q-timeline :layout="layout">
        <q-timeline-entry color="yellow-9" side="left" icon="store">
          <div class="q-mb-lg row">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">루트 골레인</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/LutGholein.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 퀘스트 할당을 위해 NPC와 대화</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="purple" side="right" icon="church">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">하렘</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/Harem.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="red-6" side="left" icon="church">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">궁전 지하</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/PalaceCellar.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : 3</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음 (1층)</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-9" side="right" icon="auto_awesome">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">비전의 성역</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/ArcaneSanctuary.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : The Summoner</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="orange-5" side="left" icon="fort">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">신비술사의 협곡</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/ValleyofKings.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 없음</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역: Tal Rasha's Tombs (6개의 가짜무덤)</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="purple-8" side="right" icon="local_hospital">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">탈 라샤 무덤</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/TalRashasTomb.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : The Orifice for the Horadric Staff</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="purple-10" side="left" icon="local_hospital">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">탈 라샤 방</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/DurielsLair.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Duriel</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역: 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold" icon="flag">
          액트 II - 파트 II 완료
        </q-timeline-entry>
      </q-timeline>
    </template>
    <template v-if="$i18n.locale === 'en-US'">
      <q-timeline :layout="layout">
        <q-timeline-entry color="yellow-9" side="left" icon="store">
          <div class="q-mb-lg row">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Lut Gholein</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/LutGholein.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Speak to NPCs for Quest Assignments</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" side="left" icon="tools_ladder">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Sewers</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/Sewers.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : 3</div>
                <div>Quest Related Areas/Monsters : Radament - Horadric Scroll (on Level 3)</div>
                <div>Waypoint : Yes (on Level 2)</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="yellow-9" side="right" icon="landscape">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Rocky Waste</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/RockyWaste.jpg" width="100%" />
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
        <q-timeline-entry color="yellow-10" side="left" icon="door_open">
          <div class="row q-mb-lg">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Dry Hills</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/DryHills.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Halls of the Dead</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/HallsoftheDead.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : 3</div>
                <div>Quest Related Areas/Monsters : Horadric Cube (on Level 3)</div>
                <div>Waypoint : Yes (on Level 2)</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-5" side="right" icon="pest_control">
          <div class="q-mb-lg row">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Far Oasis</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/FarOasis.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Maggot Lair</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/MaggotLair.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : 3</div>
                <div>Quest Related Areas/Monsters : Staff of the Kings</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="grey-8" side="left" icon="holiday_village">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Lost City</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/LostCity.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Ancient Tunnels (1 Level)</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="orange-5" side="right" icon="fort">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Valley of Snakes</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/ValleyofSnakes.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Claw Viper Temple</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : Claw Viper Temple (2 Levels)</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold" icon="flag">Act II - Part
          I Completed
        </q-timeline-entry>
      </q-timeline>
      <q-timeline :layout="layout">
        <q-timeline-entry color="yellow-9" side="left" icon="store">
          <div class="q-mb-lg row">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Lut Gholein</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/LutGholein.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Speak to NPCs for Quest Assignments</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="purple" side="right" icon="church">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Harem</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/Harem.jpg" width="100%" />
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
        <q-timeline-entry color="red-6" side="left" icon="church">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">The Palace Cellar</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/PalaceCellar.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : 3</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes (on Level 1)</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="blue-9" side="right" icon="auto_awesome">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Arcane Sanctuary</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/ArcaneSanctuary.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : The Summoner</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="orange-5" side="left" icon="fort">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Canyon of the Magi</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/ValleyofKings.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : None</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : Tal Rasha's Tombs (6 False Tombs)</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="purple-8" side="right" icon="local_hospital">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Tal Rasha's Tomb</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/TalRashasTomb.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : The Orifice for the Horadric Staff</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="purple-10" side="left" icon="local_hospital">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Tal Rasha's Chamber</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act2/DurielsLair.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas/Monsters : Duriel</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold" icon="flag">
          Act II - Part II Completed
        </q-timeline-entry>
      </q-timeline>
    </template>
    <p class="q-mt-xl text-right text-grey-6" :class="$q.screen.lt.md ? 'text-caption' : ''">
      {{ t('d2r.knowledge.source') }} :
      <a style="text-decoration: none;" target="_blank" href="http://classic.battle.net/diablo2exp/maps/act2.shtml">{{
        t('d2r.knowledge.arreatSummit')
      }}</a>
    </p>
  </div>
</template>

<style scoped></style>