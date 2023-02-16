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
      <p>아마존은 성역의 남쪽에 있는 쌍둥이해(Twin seas)의 스코보스 제도 출신의 여전사들로, 원거리 공격계열인 활과 투창, 근접 공격계열인 창을 다룬다. 정글에서 자라온지라 활 같은 사격 무기를
        다루는 데에 능숙하다. 궁술로 아마존을 상대할 수 있는 것은 오직 로그들뿐이다. 그리고 티리엘의 기록에 따르면 로그들이 소속된 보이지 않는 눈의 자매단은 아마존에서 분리된 분파라 할 수 있다. 얄궂게도
        자매단은 2편에서 안다리엘의 깽판에 대부분이 학살당하며 명맥만 겨우 유지하는 지경이 됐지만.</p>
      <p>
        아마존이 사는 섬들은 대부분 열대 정글로 빽빽히 뒤덮였다. 아마존 부족민은 정글에 적응하며 살아왔고 숲을 지붕 삼아 웅장한 도시를 건설했다. 물론 섬에만 짱박혀 있는 것은 아니고 배를 타고 나가
        외국과 무역을 하기도 한다. 이 제도는 필리오스, 스코보스, 라이칸더, 스카르타라 이 4개의 섬으로 이루어졌으며 아스카리 문명의 중심지였다고 한다. 이 문명은 고대 때부터 여성을 군주로 삼는 관습이
        있고 남성은 여성만큼 자신의 주장을 펴지 못했으며 정치권에서도 세력을 발휘하지 못하게 제재를 받았다. 권력은 오직 두 계급만이 나누어 가졌는데 하나가 아마존, 하나는 신탁의 점술사였고 각 계급이 여왕
        한명으로 대변되어 두 여왕이 공동 통치했다고 한다.</p>

      <p>아마존 부족민은 자카룸의 교리를 믿지 않고 네팔렘의 다신교를 믿는다. 이 다신교는 질서의 법칙을 신봉하며, 신들 사이에는 엄격한 계급 체계가 존재한다. 최고 신은 아술라(Athulua)와
        케트리스(Kethryes)로 이 두 여신은 함께 계절과 날씨를 다스린다. 그 밑으로 존재하는 다양한 신들은 질서의 균형을 유지하기 위해 각자 자신이 맡은 일을 수행한다. 아마존 부족민이 생각하길,
        이러한 신들의 체계는 옛날 이 섬에 살았던 조상들의 흔적이라고 한다. 옛 기록에 따르면 아마존의 조상들은 신들과 똑같은 이름을 사용했다고 한다.</p>

      <p>아마존 사회에서는 오직 여자만 전사로 키운다. 여자가 지닌 뛰어난 민첩성과 유연한 몸이 정글에서의 전투에 더 적합하기 때문. 하지만 그렇다고 남자가 천대받는 건 아니다. 남자들은 상업이나 농업을
        담당하고, 또한 영리한 경우 사회, 정치, 종교에서 중요한 역할을 수행한다. 다만, 케인의 기록을 보면 과거에는 여존남비적 정서가 있었고, 남권이 개선된 현재도 최고위직은 여성이 주로 맡는 것으로
        보인다. 이런 점을 감안하면 남권을 존중하지만 여성에게 주도권이 있는 사회로 보인다. 아마존 여전사는 싸움 잘 하고 충성심도 깊어서 외국에서는 병사나 용병으로 인기가 많다. 단, 돈을 받고 고용되었다
        해도 자신들의 윤리관에 반하는 일은 절대 하지 않는다. 자이라 여왕이 이들의 수장이며 5000명 정도의 훈련을 마친 아마존 병사들이 있다고 한다.</p>
      <p>
        이들의 역사의 기원은 릴리트의 학살에서 벗어났던 천사 라이칸더와 1세대 네팔렘 필리오스의 이야기에서 시작된다. 케인의 기록에 따르면 라이칸더는 필리오스에게 끌렸고 둘은 사랑에 빠졌다. 그러나 릴리트가
        뜻을 같이 했었던 천사와 악마들을 학살할 때 라이칸더는 천상으로 도망쳤다. 그녀는 그곳에서도 필리오스와 만나길 원했고 그래서 보이지 않는 눈이란 거울을 통해 필리오스와 관계를 이어나갔다. 그러나,
        천계의 다른 천사들이 수상한 낌새를 알아차렸고 라이칸더는 불안에 떨다가 별수없이 관계를 접기로 결정했으며 천사들이 성역의 존재를 알아채지 못하게 이 거울을 숨기라고 필리오스에게 요청했다. 슬픔에 빠진
        필리오스는 이후 아스카라라는 새 여인과 결혼해 쌍둥이 자매를 낳았고, 딸들에게 거울에 대해 알려줬다. 자매는 거울을 스코보스 섬에서 찾아내었고 이 표면에 투영된 영상을 통해 미래를 볼 수 있다는 걸
        깨달았다. 그리고 이 거울을 중심으로 섬이 발전하기 시작했으며 자매 중 강인한 쪽의 후손이 아마존 계급, 예지력을 가진 쪽의 후손이 점술사 계급으로 이어졌다고 한다. 아마존들이 통치하는 스코보스 제도는
        4개의 큰 섬을 중심지로 하는데, 이 4개의 섬들의 이름 중 하나는 네팔렘 필리오스, 또 하나는 천사 라이칸더의 이름을 따서 이름지어졌다.</p>
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
              <td class="text-right">25</td>
              <td class="text-left">체력</td>
              <td class="text-right">+ 1</td>
              <td class="text-right" colspan="2">1 활력 포인트는 1 체력을 제공합니다.</td>
            </tr>
            <tr>
              <td class="text-left">활력</td>
              <td class="text-right">20</td>
              <td class="text-left">마나</td>
              <td class="text-right">+ 1.5</td>
              <td class="text-right" colspan="2">1 에너지 포인트는 1.5 마나를 제공합니다.</td>
            </tr>
            <tr>
              <td class="text-left">에너지</td>
              <td class="text-right">15</td>
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
              <td class="text-right">15</td>
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
      <p>아마존은 주요 투자 스킬에 따라 원거리 캐릭터도 근거리 캐릭터도 될 수 있다. 다만 현거래를 이용하지 않는 맨땅의 경우, 첫 캐릭터로 아마존을 선택하는 것은 비추천하는 유저가 많다. 현거래 없이는
        육성이 너무나 힘들기 때문이다. 활을 사용하는 활마존의 육성 난이도는 최악으로 유명하고, 자벨마는 나이트메어 정도까지는 무난하게 키울 수 있지만 헬에서 내성 문제가 발목을 잡는다. 자벨마는 자력으로
        주력스킬 내성에 대처할 방법이 없는 거의 유일한 주류 육성법이기 때문이다. 물리 피해가 대부분인 바바리안도 버서크로 물리 내성을 잡을 수 있는데, 자벨마는 룬워드 '무한의 공간'이 없다면 헬에서
        라이트닝 내성 몹을 잡을 방법이 없다. 자벨마의 주력 스킬은 라이트닝이고 물리 피해는 보잘것없으며 포이즌 스킬을 섞자니 포이즌 스킬의 효율이 너무나도 좋지 않기 때문이다.</p>
      <p class="knowledge-title">
        패스트 블럭
      </p>
      <p class="row justify-start">
        <q-markup-table class="table-back" separator="cell" flat bordered>
          <tbody>
            <tr class="frame-rate">
              <td>프레임</td>
              <td>17</td>
              <td>16</td>
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
              <td>2</td>
              <td>1</td>
            </tr>
            <tr class="frame-rate">
              <td>요구치(재벌린, 단검)</td>
              <td colspan="12"></td>
              <td>0</td>
              <td>13</td>
              <td>32</td>
              <td>86</td>
              <td>600</td>
            </tr>
            <tr class="frame-rate">
              <td>요구치(그 외의 한손무기)</td>
              <td>0</td>
              <td>4</td>
              <td>6</td>
              <td>11</td>
              <td>15</td>
              <td>23</td>
              <td>29</td>
              <td>40</td>
              <td>56</td>
              <td>80</td>
              <td>120</td>
              <td>200</td>
              <td>480</td>
              <td colspan="4"></td>
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
              <td>19</td>
              <td>18</td>
              <td>17</td>
              <td>16</td>
              <td>15</td>
              <td>14</td>
              <td>13</td>
              <td>12</td>
              <td>11</td>
            </tr>
            <tr class="frame-rate">
              <td>요구치</td>
              <td>0</td>
              <td>7</td>
              <td>14</td>
              <td>22</td>
              <td>32</td>
              <td>48</td>
              <td>68</td>
              <td>99</td>
              <td>152</td>
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
      <p class="text-right text-grey-6">출처 : <a style="text-decoration: none;" class="text-green-4" target="_blank"
          href="https://namu.wiki/w/%EC%95%84%EB%A7%88%EC%A1%B4(%EB%94%94%EC%95%84%EB%B8%94%EB%A1%9C%202)">나무위키</a></p>
    </template>
    <template v-else>
      <p class="knowledge-title">
        Background
      </p>
      <p>This powerful woman warrior belongs to nomadic bands who roam the plains near the South Sea.
        The wandering of
        these groups often brings them into conflict with other peoples, so the Amazon is accustomed to fighting to
        defend her own. This lifestyle has made her fiercely independent and able to weather severe hardship and travel.
        While her skill with the bow rivals that of the Rogues, the Amazon is also adept in the use of spears and other
        throwing weapons, as well as in hand-to-hand combat. The Amazon is much sought after as a mercenary, in which
        type of service she will be loyal as long as her own ends are also served.</p>
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
              <td class="text-right">25</td>
              <td class="text-left">Stamina</td>
              <td class="text-right">+ 1</td>
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
              <td class="text-right">15</td>
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
              <td class="text-right">84</td>
              <td></td>
              <td></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td class="text-left">Mana</td>
              <td class="text-right">15</td>
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
      <p>Here is our female warrior, not to be confused as a beefed-up Rogue for as well as being much more effective
        with the bow she also has the potential to master the use of javelins, spears and some magic.</p>
      <p>Her strength lies in ranged attacks, and as well as being able to fire a bow or throw a javelin, she can
        enhance these attacks by way of imbuing the weapons with various magical effects such as poison, cold, and
        lightning. There are also skills that will improve her overall proficiency in their uses, for instance,
        ‘Penetrate’ and
        ‘Pierce’ in her Passive & Magic tree will increase her % chance to hit and ability to strike more than one
        monster with an arrow or javelin. She has six Passive skills at her disposal and all of them are quite useful to
        most Amazon builds.</p>
      <p> The Amazon begins equipped with a stack of javelins. There are many types of javelins that you’ll find later
        in the game, with more damaging ones that require more strength and dexterity to equip, and have various max
        allowed per stack.</p>
      <p>The Amazon can use her starting equipment to stab or throw, or switch to a bow as soon as she finds one of
        those. She’s good with spears also, a decent early spear find and a point in Jab can make lighter work of Act
        One, though you’ll need to work to keep enough mana early on.</p>
      <p class="knowledge-title">
        Faster Block Rate
      </p>
      <p class="row justify-start">
        <q-markup-table class="table-back" separator="cell" flat bordered>
          <tbody>
            <tr class="frame-rate">
              <td>Frames</td>
              <td>17</td>
              <td>16</td>
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
              <td>2</td>
              <td>1</td>
            </tr>
            <tr class="frame-rate">
              <td>Required<br>(javelin, dagger)</td>
              <td colspan="12"></td>
              <td>0</td>
              <td>13</td>
              <td>32</td>
              <td>86</td>
              <td>600</td>
            </tr>
            <tr class="frame-rate">
              <td>Required<br>(other one-handed weapons)</td>
              <td>0</td>
              <td>4</td>
              <td>6</td>
              <td>11</td>
              <td>15</td>
              <td>23</td>
              <td>29</td>
              <td>40</td>
              <td>56</td>
              <td>80</td>
              <td>120</td>
              <td>200</td>
              <td>480</td>
              <td colspan="4"></td>
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
              <td>19</td>
              <td>18</td>
              <td>17</td>
              <td>16</td>
              <td>15</td>
              <td>14</td>
              <td>13</td>
              <td>12</td>
              <td>11</td>
            </tr>
            <tr class="frame-rate">
              <td>Required</td>
              <td>0</td>
              <td>7</td>
              <td>14</td>
              <td>22</td>
              <td>32</td>
              <td>48</td>
              <td>68</td>
              <td>99</td>
              <td>152</td>
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
              <td>3</td>
            </tr>
            <tr class="frame-rate">
              <td>Required</td>
              <td colspan="2"></td>
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
      <p class="text-right text-grey-6">Source : <a style="text-decoration: none;" class="text-green-4" target="_blank"
          href="https://namu.wiki/w/%EC%95%84%EB%A7%88%EC%A1%B4(%EB%94%94%EC%95%84%EB%B8%94%EB%A1%9C%202)">Namu.Wiki</a>
        & <a style="text-decoration: none;" class="text-red-6" target="_blank"
          href="https://www.purediablo.com/diablo-2/amazon/">PUREDIABLO</a></p>
    </template>
  </div>
</template>

<style scoped>

</style>