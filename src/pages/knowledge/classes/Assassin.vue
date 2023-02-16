<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>

<template>
  <div>
    <template v-if="locale === 'ko-KR'">
      <p class="knowledge-title">
        배경
      </p>
      <p>'비쟈크타르(Viz-Jaqtaar)'라 불리는 마법사 암살자 집단의 맴버. 마법사 부족 전쟁(Mage Clan War)이 끝난 후에 출현한 비쟈크타르는 악마의 마법에 의해 타락한 마법사들을 처리하기
        위해 만들어진 집단이다. 암살집단인 만큼 조직은 철저히 비밀로 감추어져 있으며, 소문으로 들어본 사람은 있어도 이들에 대해 자세히 아는 사람은 매우 적다. 이는 마법사 역시 마찬가지이며, 많은
        마법사들이 이들을 무서워하여 마법에 타락하지 않도록 조심 또 조심하게 되었다.</p>
      <p>
        비쟈크타르의 어쎄신들은 자신들도 마법에 타락하는 사태를 방지하기 위해 마법은 일절 사용하지 않는다. 대신 몸과 마음을 단련하고 체술을 익히고, 자연의 힘을 모방한 함정과 도구로 싸운다.</p>

      <p>비쟈크타르의 탄생 배경은 다음과 같다. 3세기 무렵, 그 당시 가장 큰 마법사 집단이었던 비제레이(Vizjerei) 일족에서는 '호라존(Horazon)'과 '바르툭(Bartuc)'이라 불리는 형제가
        두각을 보이고 있었다. 형제는 악마의 마법을 연마하고 힘을 키우는 일에 푹 빠져 있었는데, 악마의 마법을 연마하는 방법에 대해선 서로 다른 시각을 갖고 있었다. 형제의 서로 상반되는 사상으로 인해
        비제레이는 두 세력으로 분열되었고 마법사 부족 전쟁(Mage Clan War)이 발발했다. 전쟁이 절정에 이르고 나서야 두 세력은 피차 악마에게 조종당해 왔다는 사실을 뒤늦게 알아차렸지만 이미 너무나
        큰 피해를 입은 후였다. 전쟁으로 인해 바르툭은 죽었고, 호라존은 죄책감에 사로잡혀 루트 골레인 근처에 아케인 생츄어리를 만들어 잠적했다. 이 사건으로 비제레이 부족은 타락한 마법사들이 얼마나 위험할
        수 있는지를 깨닫게 되었다. 전쟁에서 생존한 소수의 마법사들은 앞으로 절대 악마의 마법을 사용하지 않으리라 결심하고 자연의 마법에 대한 연구를 시작했다. 이것이 어쎄신이라 불리는 마법사 암살자,
        비쟈크타르의 탄생이다.</p>
      <p class="knowledge-title">
        통계 및 수치
      </p>
      <p class="row justify-start">
        <q-markup-table class="table-back" separator="vertical" flat bordered>
          <thead>
            <tr>
              <th class="text-center" colspan="2">시작 속성</th>
              <th class="text-center" colspan="2">각 캐릭터 레벨</th>
              <th class="text-center" colspan="2">속성 점수 효과</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-left">힘</td>
              <td class="text-right">20</td>
              <td class="text-left">생명력</td>
              <td class="text-right">+ 2</td>
              <td class="text-right" colspan="2">1 활력 포인트는 3 생명력을 제공합니다.</td>
            </tr>
            <tr>
              <td class="text-left">민첩성</td>
              <td class="text-right">20</td>
              <td class="text-left">체력</td>
              <td class="text-right">+ 1.25</td>
              <td class="text-right" colspan="2">1 활력 포인트는 1.25 체력을 제공합니다.</td>
            </tr>
            <tr>
              <td class="text-left">활력</td>
              <td class="text-right">20</td>
              <td class="text-left">마나</td>
              <td class="text-right">+ 1.5</td>
              <td class="text-right" colspan="2">1 에너지 포인트는 1.75 마나를 제공합니다.</td>
            </tr>
            <tr>
              <td class="text-left">에너지</td>
              <td class="text-right">25</td>
              <td>
              </td>
              <td>
              </td>
              <td colspan="2">
              </td>
            </tr>
            <tr>
              <td class="text-left">히트 포인트</td>
              <td class="text-right">50</td>
              <td>
              </td>
              <td>
              </td>
              <td colspan="2">
              </td>
            </tr>
            <tr>
              <td class="text-left">체력</td>
              <td class="text-right">95</td>
              <td>
              </td>
              <td>
              </td>
              <td colspan="2">
              </td>
            </tr>
            <tr>
              <td class="text-left">마나</td>
              <td class="text-right">25</td>
              <td>
              </td>
              <td>
              </td>
              <td colspan="2">
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </p>
      <p class="knowledge-title">
        소개
      </p>
      <p>육성법은 트랩, 킥, 클러 계열로 나뉜다. 다만 시너지 때문에 스킬 트리가 어느 정도 정형화된 다른 캐릭터들과는 달리 트랩을 제외하면 이렇다 할 시너지들이 거의 없기 때문에 각 스킬을 조합해서
        똑같은 계열의 어쎄신이라도 세부적으로는 다양한 방식의 육성을 할 수 있지만, 주로 인기있는 육성법은 극트랩, 킥트랩, 그리고 혼돈 등 크게 3가지로 국한된다.
        원래 육성 타입을 말할 때는 '~신' 으로 말하는 것이 맞는 표기겠지만, 99%의 유저들은 '~씬' 으로 부르는 암묵의 룰이 있다.</p>
      <p class="knowledge-title">
        패스트 블럭
      </p>
      <p class="row justify-start">
        <q-markup-table class="table-back" separator="cell" flat bordered>
          <tbody>
            <tr class="frame-rate">
              <td>프레임</td>
              <td>12</td>
              <td>11</td>
              <td>10</td>
              <td>9</td>
              <td>8</td>
              <td>7</td>
              <td>6</td>
              <td>5</td>
              <td>4</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
            </tr>
            <tr class="frame-rate">
              <td>요구치</td>
              <td colspan="7"></td>
              <td>0</td>
              <td>13</td>
              <td>32</td>
              <td>86</td>
              <td>600</td>
            </tr>
          </tbody>
        </q-markup-table>
      </p>
      <p class="knowledge-title">
        패스트 캐스트
      </p>
      <p class="row justify-start">
        <q-markup-table class="table-back" separator="cell" flat bordered>
          <tbody>
            <tr class="frame-rate">
              <td>프레임</td>
              <td>16</td>
              <td>15</td>
              <td>14</td>
              <td>13</td>
              <td>12</td>
              <td>11</td>
              <td>10</td>
              <td>9</td>
            </tr>
            <tr class="frame-rate">
              <td>요구치</td>
              <td>0</td>
              <td>8</td>
              <td>16</td>
              <td>27</td>
              <td>42</td>
              <td>65</td>
              <td>102</td>
              <td>174</td>
            </tr>
          </tbody>
        </q-markup-table>
      </p>
      <p class="knowledge-title">
        패스트 힛 리커버리
      </p>
      <p class="row justify-start">
        <q-markup-table class="table-back" separator="cell" flat bordered>
          <tbody>
            <tr class="frame-rate">
              <td>프레임</td>
              <td>15</td>
              <td>14</td>
              <td>13</td>
              <td>12</td>
              <td>11</td>
              <td>10</td>
              <td>9</td>
              <td>8</td>
              <td>7</td>
              <td>6</td>
              <td>5</td>
              <td>4</td>
              <td>3</td>
            </tr>
            <tr class="frame-rate">
              <td>요구치</td>
              <td colspan="2"></td>
              <td>0</td>
              <td>5</td>
              <td>10</td>
              <td>16</td>
              <td>24</td>
              <td>37</td>
              <td>54</td>
              <td>86</td>
              <td>152</td>
              <td>360</td>
              <td></td>
            </tr>
          </tbody>
        </q-markup-table>
      </p>
      <p class="text-right text-grey-6">출처 : <a style="text-decoration: none;" class="text-green-4" target="_blank"
          href="https://namu.wiki/w/%EC%95%84%EB%A7%88%EC%A1%B4(%EB%94%94%EC%95%84%EB%B8%94%EB%A1%9C%202)">나무위키</a></p>
    </template>
    <template v-else>
      <p class="knowledge-title">
        Background
      </p>
      <p>he Order of Mage Slayers was formed after the Vizjerei survived the tragedy brought on by Bartuc and Horazon.
        Their purpose was to watch for rogue magi that may become corrupted by the forces of Evil. To be effective at
        this task they were trained in abilities that were not conducive to Demonic corruption. Living as rumour and
        myth to the general population, even other magi knew very little about this mysterious order. Their reputation
        was shrouded in mystery and the simple fear of their retribution almost ensured steadfast vigilance against
        corruption amongst those who knew they were real.</p>
      <p>Assassins do not employ the magical arts directly; rather, they use enchanted items that mimic elemental powers
        and can be used autonomously. To further avoid potential corruption, they focus on the natural abilities of the
        mortal body – powers of the mind and unarmed combat.</p>
      <p class="knowledge-title">
        Statistics And Figures
      </p>
      <p class="row justify-start">
        <q-markup-table class="table-back" separator="vertical" flat bordered>
          <thead>
            <tr>
              <th class="text-center" colspan="2">Starting Attributes</th>
              <th class="text-center" colspan="2">Each Character Level</th>
              <th class="text-center" colspan="2">Attribute Point Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-left">Strength</td>
              <td class="text-right">20</td>
              <td class="text-left">Life</td>
              <td class="text-right">+ 2</td>
              <td class="text-right" colspan="2">1 Vitality point gives 3 Life</td>
            </tr>
            <tr>
              <td class="text-left">Dexterity</td>
              <td class="text-right">20</td>
              <td class="text-left">Stamina</td>
              <td class="text-right">+ 1.25</td>
              <td class="text-right" colspan="2">1 Vitality point gives 1 Stamina</td>
            </tr>
            <tr>
              <td class="text-left">Vitality</td>
              <td class="text-right">20</td>
              <td class="text-left">Mana</td>
              <td class="text-right">+ 1.5</td>
              <td class="text-right" colspan="2">1 Energy point gives 1.5 Mana</td>
            </tr>
            <tr>
              <td class="text-left">Energy</td>
              <td class="text-right">25</td>
              <td></td>
              <td></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td class="text-left">Hit Points</td>
              <td class="text-right">50</td>
              <td></td>
              <td></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td class="text-left">Stamina</td>
              <td class="text-right">95</td>
              <td></td>
              <td></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td class="text-left">Mana</td>
              <td class="text-right">25</td>
              <td></td>
              <td></td>
              <td colspan="2"></td>
            </tr>
          </tbody>
        </q-markup-table>
      </p>
      <p class="knowledge-title">
        Introduction
      </p>
      <p>
        The breeding method is divided into trap, kick, and claw series. However, unlike other characters whose skill
        tree is somewhat standardized due to synergy, there are almost no synergies except for traps [8], so by
        combining each skill
        Even an Assassin of the same type can be trained in various ways in detail, but the most popular training
        methods are limited to three major types: extreme trap, kick trap, and chaos.
        When talking about the original breeding type, it would be correct to say '~ sin', but there is an implicit rule
        that 99% of users call it '~ ssin'.</p>
      <p class="knowledge-title">
        Faster Block Rate
      </p>
      <p class="row justify-start">
        <q-markup-table class="table-back" separator="cell" flat bordered>
          <tbody>
            <tr class="frame-rate">
              <td>Frames</td>
              <td>12</td>
              <td>11</td>
              <td>10</td>
              <td>9</td>
              <td>8</td>
              <td>7</td>
              <td>6</td>
              <td>5</td>
              <td>4</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
            </tr>
            <tr class="frame-rate">
              <td>Required</td>
              <td colspan="7"></td>
              <td>0</td>
              <td>13</td>
              <td>32</td>
              <td>86</td>
              <td>600</td>
            </tr>
          </tbody>
        </q-markup-table>
      </p>
      <p class="knowledge-title">
        Faster Cast Rate
      </p>
      <p class="row justify-start">
        <q-markup-table class="table-back" separator="cell" flat bordered>
          <tbody>
            <tr class="frame-rate">
              <td>Framse</td>
              <td>16</td>
              <td>15</td>
              <td>14</td>
              <td>13</td>
              <td>12</td>
              <td>11</td>
              <td>10</td>
              <td>9</td>
            </tr>
            <tr class="frame-rate">
              <td>Required</td>
              <td>0</td>
              <td>8</td>
              <td>16</td>
              <td>27</td>
              <td>42</td>
              <td>65</td>
              <td>102</td>
              <td>174</td>
            </tr>
          </tbody>
        </q-markup-table>
      </p>
      <p class="knowledge-title">
        Faster Hit Recovery
      </p>
      <p class="row justify-start">
        <q-markup-table class="table-back" separator="cell" flat bordered>
          <tbody>
            <tr class="frame-rate">
              <td>Frames</td>
              <td>15</td>
              <td>14</td>
              <td>13</td>
              <td>12</td>
              <td>11</td>
              <td>10</td>
              <td>9</td>
              <td>8</td>
              <td>7</td>
              <td>6</td>
              <td>5</td>
              <td>4</td>
              <td>3</td>
            </tr>
            <tr class="frame-rate">
              <td>Required</td>
              <td colspan="2"></td>
              <td>0</td>
              <td>5</td>
              <td>10</td>
              <td>16</td>
              <td>24</td>
              <td>37</td>
              <td>54</td>
              <td>86</td>
              <td>152</td>
              <td>360</td>
              <td></td>
            </tr>
          </tbody>
        </q-markup-table>
      </p>
      <p class="text-right text-grey-6">Source : <a style="text-decoration: none;" class="text-green-4" target="_blank"
          href="https://namu.wiki/w/%EC%95%84%EB%A7%88%EC%A1%B4(%EB%94%94%EC%95%84%EB%B8%94%EB%A1%9C%202)">Namu.Wiki</a>
        & <a style="text-decoration: none;" class="text-red-6" target="_blank"
          href="https://www.purediablo.com/diablo-2/amazon/">PUREDIABLO</a></p>
    </template>
  </div>
</template>

<style scoped>

</style>