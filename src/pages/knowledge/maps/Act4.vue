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
        <q-timeline-entry color="grey-8" side="left" icon="castle">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">혼돈의 요새</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act4/PandemoniumFortress.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : 퀘스트 할당을 위해 NPC와 대화</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="yellow-10" side="right" icon="border_outer">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">평원 외곽</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act4/OuterSteppes.jpg" width="100%" />
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
        <q-timeline-entry color="indigo" side="left" icon="change_history">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">절망의 평원</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act4/PlainsofDespair.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Izual</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" side="right" icon="stairs">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">저주받은 자들의 도시</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act4/CityoftheDamned.jpg" width="100%" />
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
        <q-timeline-entry color="orange-8" side="left" icon="local_fire_department">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">불길의 강</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act4/RiverofFlames.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Hellforge</div>
                <div>웨이포인트 : 있음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="secondary" side="right" icon="full_stacked_bar_chart">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">혼돈의 성역</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act4/ChaosSanctuary.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>레벨 : N/A</div>
                <div>퀘스트 관련 영역 / 몬스터 : Diablo</div>
                <div>웨이포인트 : 없음</div>
                <div>동굴 / 추가구역 : 없음</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold" icon="flag">
          액트 IV 완료
        </q-timeline-entry>
      </q-timeline>
    </template>
    <template v-if="$i18n.locale === 'en-US'">
      <q-timeline dense :layout="layout">
        <q-timeline-entry color="grey-8" side="left" icon="castle">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Pandemonium Fortress</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act4/PandemoniumFortress.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Speak to NPCs for Quest Assignments</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="yellow-10" side="right" icon="border_outer">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Outer Steppes</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act4/OuterSteppes.jpg" width="100%" />
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
        <q-timeline-entry color="indigo" side="left" icon="change_history">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Plains of Despair</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act4/PlainsofDespair.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Izual</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="green-10" side="right" icon="stairs">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">City of the Damned</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act4/CityoftheDamned.jpg" width="100%" />
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
        <q-timeline-entry color="orange-8" side="left" icon="local_fire_department">
          <div class="row knowledge-item">
            <div class="col gt-xs"></div>
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">River of Flame</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act4/RiverofFlames.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Hellforge</div>
                <div>Waypoint : Yes</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="secondary" side="right" icon="full_stacked_bar_chart">
          <div class="row knowledge-item">
            <q-card class="map-card no-shadow">
              <q-card-section class="text-center">
                <div class="text-h6 text-primary">Chaos Sanctuary</div>
              </q-card-section>
              <img src="/images/knowledge/maps/act4/ChaosSanctuary.jpg" width="100%" />
              <q-card-section class="text-left text-body2">
                <div>Levels : N/A</div>
                <div>Quest Related Areas / Monsters : Diablo</div>
                <div>Waypoint : No</div>
                <div>Caves / Additional Zones : None</div>
              </q-card-section>
            </q-card>
            <div class="col gt-xs"></div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry color="primary" class="text-h5 text-weight-bold" icon="flag">
          Act IV Completed
        </q-timeline-entry>
      </q-timeline>
    </template>
    <p class="q-mt-xl text-right text-grey-6" :class="$q.screen.lt.md ? 'text-caption' : ''">
      {{ t('d2r.knowledge.source') }} :
      <a style="text-decoration: none;" target="_blank" href="http://classic.battle.net/diablo2exp/maps/act4.shtml">{{
        t('d2r.knowledge.arreatSummit')
      }}</a>
    </p>
  </div>
</template>

<style scoped></style>