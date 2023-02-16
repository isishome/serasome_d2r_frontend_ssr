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
      <p>강령술사, 즉 "라트마의 사제"(The Priests of Rathma)의 설립자는 라트마이다. 그는 이나리우스와 릴리트의 아들로서 최초의 네팔렘이다. 허나 부모에게 천대받았고, 그 역시 부모와
        사이가 나빠서 사실상 의절한 후 트래그울의 가르침에 따라 지금의 삶과 죽음의 균형에 대한 지식을 쌓으며 후에 있을 천상과 지옥의 성역 침공이나 간섭에 대비했으며, 이후 울디시안 울디오메드의
        아우이자 유일하게 울디시안을 기억하던 멘델른이 이름을 칼란(Kalan)으로 개명해 그의 첫 번째 제자이자 강령술사가 된다.</p>
      <p>
        라트마의 사제들은 오래 전 머나먼 동쪽 밀림, 늪지대의 깊은 곳에 자리를 잡았다. 이들은 거대 지하도시인 '죽음의 도시'에 살고 있으며, 다른 마술사 일족에 동화되지 않도록 은둔하고 있다. 철저히
        베일에 싸여있기에 이들 성직자들의 존재 자체도 모르는 사람이 대부분이고 그나마 알고 있는 사람들도 '강령술사'라고 부르며 꺼리고 있지만, 이들은 타인의 평판에는 아랑곳하지 않는다.</p>
      <p> '죽음선견자 주르단'이 이들의 수장이며 구성원은 150명으로 추정된다.</p>
      <p> 죽음의 도시에서 고립된 채 지내면서 이들은 매우 독특하고 신비한 마법을 연구할 수 있게 되었다. 라트마의 가르침은 세계의 조화를 지키는 것이다. 이 가르침을 따라 오랫동안 연구와 실험을 지속해온
        그들은
        삶과 죽음의 이치를 깊이 이해하여 생사의 경계를 드나들 수 있게 되었고, 죽은 자에게 생명을 불어넣거나 각종 괴물들을 소환해 조종하는 주술을 다룰 수 있게 된다. 세계의 조화를 추구하는 지라 시체를
        부리는 주술을 쓰는데도 악의 길에 빠져들지 않았다고 한다.</p>
      <p>원래 라트마의 사제들은 세계의 균형을 지키기 위해 빛과 어둠 어느 쪽에도 서지 않고 중립을 표방한다. 그런데 디아블로를 앞세운 악마의 군대가 다시 인간 세상에서 활개치고 다니자 사제들은 악을 몰아내고
        세계의 균형을 회복할 때까지 빛의 진영에 합류하기로 한다. 그러니까 게임에 등장하는 강령술사는 잠시 빛의 진영에 합류한 것일 뿐이라는 이야기다. 이는 시초인 라트마가 천상과 지옥에 의해 멸망이네 뭐네
        시달리던 시대의 인물이었기에 그 가르침에도 크게 영향을 줘 철저히 중립을 지키게끔 한다. 게임에서는 남성 캐릭터만 나오지만 소설에서는 여성 강령술사도 나온 것을 볼 때 여성도 될 수 있는 것
        같다. 이 때문에 디아블로 3에서 자연스럽게 강령술사가 나올 수 있었다.</p>
      <p>다루는 것도 그렇고, 상술한 중립을 표방하는 성향 때문에 불특정 다수에게 상당히 경계받는 듯하다. 2막에서 메탄을 만날 때 대사를 보면 마법사나 수도사, 성전사는 강령술사를 만나자마자 적대적인
        티를 대놓고 표출한다. 추종자로 요술사를 데리고 가서 이벤트를 하면 죽은 자는 믿을 게 못 된다는 말을 하기도 한다. 또 마법사의 지속기술 중에 생명의 구슬을 먹고 버프를 받는 것이 있는데, 다른 고위
        마법사는 이걸 보고 강령술 같은 것이라며 대놓고 이단시하는 모습을 보여준다. 야만용사나 악마사냥꾼은 중립적으로 대하는 편이며 부두술사는 영혼을 이해하는 분이라며 친근감있게 대한다. 부두술사
        전설장비 별빛금속 쿠크리에는 강령술사가 부두술사 부족을 만나 교류를 한 것으로 여겨지는 설명이 들어간 장비가 있다. 여담이지만 최초의 네크로맨서이자 네팔렘인 라트마가 아버지 이나리우스에게 수치로
        여겨졌던 걸 보면 천시받는 게 전통인 모양. 단 2막에서 처음 만났을 때 적대적인 반응을 보이는 직업들도 5막에서 다시 만났을 때는 다소 누그러진 반응을 보이고, 코르마크는 메탄을 두고 명예를 아는
        전사라고 높게 평가하는걸 보면 한번 같이 싸워 본 뒤로는 신뢰하게 된 듯하다.</p>
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
              <td class="text-right">15</td>
              <td class="text-left">생명력</td>
              <td class="text-right">+ 1.5</td>
              <td class="text-right" colspan="2">1 활력 포인트는 2 생명력을 제공합니다.</td>
            </tr>
            <tr>
              <td class="text-left">민첩성</td>
              <td class="text-right">25</td>
              <td class="text-left">체력</td>
              <td class="text-right">+ 1</td>
              <td class="text-right" colspan="2">1 활력 포인트는 1 체력을 제공합니다.</td>
            </tr>
            <tr>
              <td class="text-left">활력</td>
              <td class="text-right">15</td>
              <td class="text-left">마나</td>
              <td class="text-right">+ 2</td>
              <td class="text-right" colspan="2">1 에너지 포인트는 2 마나를 제공합니다.</td>
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
              <td class="text-right">45</td>
              <td>
              </td>
              <td>
              </td>
              <td colspan="2">
              </td>
            </tr>
            <tr>
              <td class="text-left">체력</td>
              <td class="text-right">79</td>
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
      <p>우선 저주 계열 스킬은 어떤 유형을 키우더라도 찍긴 하지만 적극 투자는 하지 않는다. 대부분의 저주는 레벨을 올려도 효과 범위만 증가하고, 레벨 상승시 디버프 효과가 강해지는 저주라도 레벨이 높아질
        수록 효과 상승폭이 점감되기 때문에 저주 스킬은 보통 1레벨씩만 찍는다. 그래서 그랜드 스킬피참을 제작할 때 저주 스펠 + 라이프 45 짜리가 붙은 게 나오면 진짜 저주받은 기분이 든다고... 따라서
        네크의 스킬 트리는 소환 계열 스킬을 올리느냐, 포이즌 & 본 계열 스킬에서 포이즌을 올리느냐 본을 올리느냐 하는 정도의 차이 밖에 없다. 이 중에서 본 계열을 제외하면 스킬 선택의 폭이 매우
        넓으므로(=스킬 포인트가 많이 남으므로) 사소한 베리에이션은 매우 다양할 수 있다. 의외로 1만 찍어도 어느 정도 효과를 보는 스킬이 많아서 주력기 외의 보조 스킬은 취향을 많이 타는 편. 다만 어떤
        네크로맨서라도 커프스 익스플로전은 반드시 사용 가능해야 한다.</p>
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
            </tr>
            <tr class="frame-rate">
              <td>요구치</td>
              <td></td>
              <td>0</td>
              <td>6</td>
              <td>13</td>
              <td>20</td>
              <td>32</td>
              <td>52</td>
              <td>86</td>
              <td>174</td>
              <td>600</td>
            </tr>
          </tbody>
        </q-markup-table>
      </p>
      <p class="knowledge-title">
        패스트 캐스트
      </p>
      <p class="row justify-start">
        <q-markup-table class="table-back" separator="horizontal" flat bordered>
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
            </tr>
            <tr class="frame-rate">
              <td>요구치</td>
              <td>0</td>
              <td>9</td>
              <td>18</td>
              <td>30</td>
              <td>48</td>
              <td>75</td>
              <td>125</td>
            </tr>
          </tbody>
        </q-markup-table>
      </p>
      <p class="knowledge-title">
        패스트 힛 리커버리
      </p>
      <p class="row justify-start">
        <q-markup-table class="table-back" separator="horizontal" flat bordered>
          <tbody>
            <tr class="frame-rate">
              <td>프레임</td>
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
            </tr>
            <tr class="frame-rate">
              <td>요구치</td>
              <td>0</td>
              <td>5</td>
              <td>10</td>
              <td>16</td>
              <td>26</td>
              <td>39</td>
              <td>56</td>
              <td>86</td>
              <td>152</td>
              <td>377</td>
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
      <p>From the steamy recesses of the southern swamps comes a figure cloaked in mystery. The Necromancer, as his name
        implies, is an unseemly form of sorcerer whose spells deal with the raising of the dead and the summoning and
        control of various creatures for his purposes. Though his goals are often aligned with those of the forces of
        Light, some do not think that these ends can justify his foul means. Long hours of study in dank mausolea have
        made his skin pale and corpselike, his figure, skeletal. Most people shun him for his peculiar looks and ways,
        but none doubt the power of the Necromancer, for it is the stuff of nightmares.</p>
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
              <td class="text-right">15</td>
              <td class="text-left">Life</td>
              <td class="text-right">+ 1.5</td>
              <td class="text-right" colspan="2">1 Vitality point gives 2 Life</td>
            </tr>
            <tr>
              <td class="text-left">Dexterity</td>
              <td class="text-right">25</td>
              <td class="text-left">Stamina</td>
              <td class="text-right">+ 1</td>
              <td class="text-right" colspan="2">1 Vitality point gives 1 Stamina</td>
            </tr>
            <tr>
              <td class="text-left">Vitality</td>
              <td class="text-right">15</td>
              <td class="text-left">Mana</td>
              <td class="text-right">+ 2</td>
              <td class="text-right" colspan="2">1 Energy point gives 2 Mana</td>
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
              <td class="text-right">45</td>
              <td></td>
              <td></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td class="text-left">Stamina</td>
              <td class="text-right">79</td>
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
      <p>First of all, they do not actively invest in curse-type skills, no matter what type of skill they develop. Most
        curses only increase the range of effect even if the level is raised, and even if the level of a curse increases
        the debuff effect when the level rises, the increase in effect decreases as the level increases, so the curse
        skill usually only takes 1 level. So, when making a Grand Skill Blood Charm, if a curse spell + Life 45 is
        attached, it feels like a real curse... So, Nek's skill tree determines whether to raise Summon skill or Poison
        in Poison & Bone skill. There is only a difference in the degree of raising it or not. Among them, except for
        this series, the range of skill selection is very wide (= there are many skill points left), so minor variations
        can be very diverse. Surprisingly, there are a lot of skills that can have an effect to a certain extent even
        with just 1 shot, so I tend to prefer secondary skills other than the main one. However, any Necromancer must be
        able to use Cuff Explosion.</p>
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
            </tr>
            <tr class="frame-rate">
              <td>Required</td>
              <td></td>
              <td>0</td>
              <td>6</td>
              <td>13</td>
              <td>20</td>
              <td>32</td>
              <td>52</td>
              <td>86</td>
              <td>174</td>
              <td>600</td>
            </tr>
          </tbody>
        </q-markup-table>
      </p>
      <p class="knowledge-title">
        Faster Cast Rate
      </p>
      <p class="row justify-start">
        <q-markup-table class="table-back" separator="horizontal" flat bordered>
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
            </tr>
            <tr class="frame-rate">
              <td>Required</td>
              <td>0</td>
              <td>9</td>
              <td>18</td>
              <td>30</td>
              <td>48</td>
              <td>75</td>
              <td>125</td>
            </tr>
          </tbody>
        </q-markup-table>
      </p>
      <p class="knowledge-title">
        Faster Hit Recovery
      </p>
      <p class="row justify-start">
        <q-markup-table class="table-back" separator="horizontal" flat bordered>
          <tbody>
            <tr class="frame-rate">
              <td>Frames</td>
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
            </tr>
            <tr class="frame-rate">
              <td>Required</td>
              <td>0</td>
              <td>5</td>
              <td>10</td>
              <td>16</td>
              <td>26</td>
              <td>39</td>
              <td>56</td>
              <td>86</td>
              <td>152</td>
              <td>377</td>
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