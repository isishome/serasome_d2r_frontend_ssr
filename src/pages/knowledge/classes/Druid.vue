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
      <p>드루이드는 본래 바바리안의 일족이었으나, 의견 차이로 인해 갈라져 나온 분파이다. 스코스글랜(Scosglen)의 북쪽 숲에 은둔하고 있다. 드루이드들은 전통적인 마법(더브드로이아크
        Dubhdroiacht라고 일컫는다)을 꺼리고, 땅, 불, 바람 등 자연의 힘을 빌리는 마법을 사용한다. 또한 야생 동물과 친하여 필요할 때 언제든지 그들을 불러낼 수 있다. 또한 동물에 대한 깊은
        이해와 자연 마법을 응용하여 직접 동물로 변신할 수도 있다. '푸른 걸음 키오단'이 이들의 수장이며 드루이드 문화를 보살피고 이끄는 고위전사는 500명 정도로 추정된다고 한다.</p>
      <p>기록에 의하면, 바바리안 부족의 옛 왕인 불카토스에게는 '바실리'라는 동생이 있었다. 두 사람은 의좋은 형제로서 함께 아리앗 산을 지키기 위해 노력했다. 그런데 두 사람은 서로 다른 의견을 갖고
        있었다. 불카토스는 혹독한 육체와 훈련을 단련한 맷집을 통해 힘을 길러야 한다고 생각한 반면, 바실리는 자연과 영적으로 하나가 되어야 한다고 생각했다. 그래도 두 사람은 서로의 철학이 가진 장점을
        이해했고, 그리하여 바실리는 부족 내에서 뛰어난 시인전사(warrior-poet)와 주술사(shaman)들을 선발하여 그들과 함께 고향을 떠났다. 스코스글렌의 깊은 숲속에 정착한 바실리 일파는 그곳에
        첫 번째 드루이드 학교를 세우고 자신들만의 새로운 문화를 일구었다. 이후 아리앗 산의 바바리안 부족과 완전히 교류를 끊고, 거대한 악이 나타나기 전까지는 절대 아리앗 산에 돌아가지 않겠다고 맹세했다.
      </p>
      <p>바실리는 식물과 동물 같은 자연 요소와 조화를 이루기 위한 기초적인 사고방식인 '카오이 둘라(Caoi Dúlra)'를 가르쳤다. 카오이 둘라를 연구하고 연마하여 드루이드들은 자연 요소와 하나가 되는
        법을 배웠고, 나중에는 식물이나 동물과 대화를 나누는 법도 발견해냈다. 식물과 동물은 드루이드에게 자연의 비밀을 가르쳐주었고, 덕분에 드루이드들은 멀리 있는 동물을 부르는 방법, 대지의 식물을 소환하는
        방법, 동물로 변신하여 강한 힘을 얻는 방법, 그리고 (서툴긴 하지만) 날씨를 조종하는 방법까지 알게 되었다. 마법단의 전성기 때 최고의 실력을 가진 원소술사도 이들이 다루는 야생의 원초적인 힘을
        두려워해서 스코스글렌에 들어가기를 꺼렸다고 한다.</p>
      <p>스코스글렌에 있는 인공구조물은 고대의 돌을 쌓아 만든 탑 정도가 전부다. 이 무성한 숲 곳곳에 산재한 드루이드 대학들이 그런 구조물이고 이 숲지대의 서쪽 숲속에 위치한 커다란 참나무 그늘 아래 위치한
        '글루안파이드아(Glór-an-Fháidha)'에는 가장 위대한 드루이드 학교인 '투르 둘라(Túr Dúlra)'가 위치했다. 수 세기 동안 드루이드들은 이 배움의 성소에서 강력한 자연 마법뿐만 아니라
        과거 바바리안 시절부터 단련해 왔던 전투 기술도 이어받아 훈련했다. 세월이 흘러 악마의 군대에게 침략해 오자 마침내 드루이드들은 은둔에서 벗어나 바깥 세상으로 전진했다.
      </p>
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
              <td class="text-right">20</td>
              <td class="text-left">체력</td>
              <td class="text-right">+ 1</td>
              <td class="text-right" colspan="2">1 활력 포인트는 1 체력을 제공합니다.</td>
            </tr>
            <tr>
              <td class="text-left">활력</td>
              <td class="text-right">25</td>
              <td class="text-left">마나</td>
              <td class="text-right">+ 2</td>
              <td class="text-right" colspan="2">1 에너지 포인트는 2 마나를 제공합니다.</td>
            </tr>
            <tr>
              <td class="text-left">에너지</td>
              <td class="text-right">20</td>
              <td>
              </td>
              <td>
              </td>
              <td colspan="2">
              </td>
            </tr>
            <tr>
              <td class="text-left">히트 포인트</td>
              <td class="text-right">55</td>
              <td>
              </td>
              <td>
              </td>
              <td colspan="2">
              </td>
            </tr>
            <tr>
              <td class="text-left">체력</td>
              <td class="text-right">84</td>
              <td>
              </td>
              <td>
              </td>
              <td colspan="2">
              </td>
            </tr>
            <tr>
              <td class="text-left">마나</td>
              <td class="text-right">20</td>
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
      <p>기본적으로 바바리안, 소서리스, 팔라딘, 네크로맨서의 특징을 모두 지닌 하이브리드 클래스이나, 투자 기술에 따라서 마법형, 근접형으로 거의 철저하게 나뉜다. 공통점이라고 하면 주력 정령을 하나씩
        둔다는 정도밖에 없다. 애매하게 마법형과 근접형을 절충하면 제대로 된 위력을 행사할 수가 없다. 변신 중에는 마법 스킬을 사용할 수 없고, 마법 스킬의 위력을 극대화시키기 위해 시너지를 줄 수
        없기 때문이다.
      </p>
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
              <td>10</td>
              <td>19</td>
              <td>30</td>
              <td>46</td>
              <td>68</td>
              <td>99</td>
              <td>163</td>
              <td></td>
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
              <td>2</td>
            </tr>
            <tr class="frame-rate">
              <td>요구치</td>
              <td>0</td>
              <td>3</td>
              <td>7</td>
              <td>13</td>
              <td>19</td>
              <td>29</td>
              <td>42</td>
              <td>63</td>
              <td>99</td>
              <td>174</td>
              <td>456</td>
              <td colspan="2"></td>
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
      <p>The Druids who inhabit the northern forests of Scosglen developed their magic independently from the eastern
        mage clans. They served as the warrior-kings of their tribes, usually living apart from their people in massive
        stone towers that were covered with vines and ivy. As masters of the natural world, they were able to control
        living creatures and the very forces of nature.</p>
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
              <td class="text-right">20</td>
              <td class="text-left">Stamina</td>
              <td class="text-right">+ 1</td>
              <td class="text-right" colspan="2">1 Vitality point gives 1 Stamina</td>
            </tr>
            <tr>
              <td class="text-left">Vitality</td>
              <td class="text-right">25</td>
              <td class="text-left">Mana</td>
              <td class="text-right">+ 2</td>
              <td class="text-right" colspan="2">1 Energy point gives 2 Mana</td>
            </tr>
            <tr>
              <td class="text-left">Energy</td>
              <td class="text-right">20</td>
              <td></td>
              <td></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td class="text-left">Hit Points</td>
              <td class="text-right">55</td>
              <td></td>
              <td></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td class="text-left">Stamina</td>
              <td class="text-right">84</td>
              <td></td>
              <td></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td class="text-left">Mana</td>
              <td class="text-right">20</td>
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
      <p>As Diablo 2 rounds down figures displayed you will see a discrepancy at times. With the example above with life
        increasing by .75 with each level up, even though you won’t see a figure change to x.5 and x.25 the Druid will
        be benefiting from the fraction of life increase and LoD will round the figured down for display purposes only.
      </p>
      <p> You can see he picks up a decent amount of mana per point in energy, but he needs to feed all of the
        attributes,
        more so than any of the other characters. A Druid could play all magical, using only the Summoning and Elemental
        trees, and he’d be much like a Necromancer with more powerful skills {but less powerful minions} that way. He
        would need more mana to play this style.</p>
      <p>Or he could go a more active route, and put points into the Shape-shifting tree, as well as some in Summoning,
        and after Summoning some of them up, join his minions in battle. To succeed at this technique he would need more
        points in strength to wear better armour for protection in battle, and would also need more hit points and
        dexterity, to be able to hit the enemy successfully.</p>
      <p>A Druid who used skills from all three trees would have problems doing them all well, needing points in all
        attributes to wear armour, do damage, hit successfully, and still have enough mana to use some Elemental skills
        and keep summoning creatures and transforming. He seems to have a lot of options in play style, but also seems
        that he would need to be handled well, to keep from being spread too thin.</p>
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
              <td>10</td>
              <td>19</td>
              <td>30</td>
              <td>46</td>
              <td>68</td>
              <td>99</td>
              <td>163</td>
              <td></td>
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
              <td>2</td>
            </tr>
            <tr class="frame-rate">
              <td>Required</td>
              <td>0</td>
              <td>3</td>
              <td>7</td>
              <td>13</td>
              <td>19</td>
              <td>29</td>
              <td>42</td>
              <td>63</td>
              <td>99</td>
              <td>174</td>
              <td>456</td>
              <td colspan="2"></td>
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