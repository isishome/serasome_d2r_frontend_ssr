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
      <p>잔 에수(Zann Esu)는 케지스탄의 주요 마법단(Mage Clan) 중 하나로, 오직 여성만 존재하는 특이한 곳이다. 가장 오래된 마법단 중 하나이지만, 이들에 대해 알려진 사실은 별로 많지
        않다. 몇 세기 전, 에수(Esu) 마녀들은 14개의 강력한 집회를 최초로 소집했고, 그들은 토론 끝에 속세를 등지고 동쪽 정글로 사라졌으며 이것이 잔 에수의 탄생이다.</p>
      <p> 나중에 추가된 설정에 의하면, 바바리안이 네팔렘 불카토스를 시조로 두고 있는 것처럼 이들도 에수(Esu)라는 네팔렘을 시조로 두고 있다. 먼 옛날, 원소가 지닌 힘과 난폭함에 이끌렸던 에수는 치열한
        명상 끝에 그 힘을 다루는 법을 터득했으며, 그녀 밑에 모인 추종자들이 훗날 잔 에수의 시초가 되었다.</p>
      <p> 잔 에수가 정확히 어디에 위치했는지는 밝혀지지 않았으며, 현재도 속세와 단절한 채 지내고 있다. 이들이 속세에 나오는 건 새로운 학생을 뽑을 때뿐이다. 매 7년마다 잔 에수의 신자들은 7살 된 딸을
        가진 가정을 하나하나 방문하고, 공손하고 온화한 태도로 소녀들에게 몇 가지 질문을 함으로써 학생 후보를 점 찍어놓고 떠난다. 이후 두 번째 방문에서는 첫 번째 방문 때 골라놓은 소녀들만 만나서 견습
        기간을 가진다. 이렇게 선택받은 가정은 몇 년 간 복을 누리게 된다.</p>
      <p> 잔 에수의 원소술사들은 순수하고 완벽한 마법을 추구한다. 엄격하게 선별한 순수 원소마법만 사용하고, 그 외의 다른 마법들을 조잡하다고 여긴다. 이들은 원소를 다양각색한 마법적 형태로 변형시킬 수
        있다.
        잔 에수는 마법 원소의 조율에 뛰어난 재능을 지닌 처녀들만 골라서 이러한 마법을 가르친다. 잔 에수는 완벽을 연구함으로써 궁극의 순수성을 얻고 가장 강력한 마법단이 될 것이라고 믿는다.</p>
      <p> 속세와 단절한 채 지내긴 하지만, 원소술사들은 활동적이고 나긋나긋하며 자신감 넘쳐서 전혀 은둔자처럼 보이지 않는다. 이들은 다른 마법단들처럼 많은 기술을 지니고 있는데, 특히 원소 마법에 뛰어나다.
      </p>
      <p> 잔 에수의 예언자들은 훗날 거대한 악이 도래할 것이며 그에 맞서지 못하면 자신들이 사라지게 되리란 신탁을 내렸다. 이에 잔 에수는 수 세기 동안 비밀리에 마법을 연구하면서 다가올 시련을 대비했다.
        디아블로가 트리스트람에서 깨어날 무렵, 예언자들은 시련이 가까이 다가왔음을 선포한다. 근래에 들어 악마의 졸개들이 발견된 곳이라면 잔 에수의 원소술사들이 불쑥 나타나서 악마들과 싸우는 걸 볼 수 있다.
      </p>
      <p>
        대부분의 마법학자(mage)들이 그러하듯이 이들 역시 백병전을 저속하게 여기며 오직 마법만 이용해 싸운다. 하지만 정작 게임상에서는 초반에 활, 자벨린, 칼 등을 들고 다녀야 한다. 시너지 스킬 패치
        이후엔 1티어 스킬 레벨을 올릴 수 있어 사정이 좋아졌다.</p>
      <p> 백병전과 마법에 대한 견해는 바바리안과 정 반대이다. 바바리안은 마법을 사용하는 것을 저속하게 여기며, 혹독하고 육체적인 접근전을 익숙하게 여긴다.
        디아블로 2에서 5막 하로가스의 주문 사용자인 마라가 소서리스와 관한 썰을 푸는데, 그녀는 어릴 때 잔 에수를 따르려 했지만 단순한 마법 주문으로는 자신의 능력이 결코 발전하지 않았다고 한다. 그와
        별개로 잔 에수의 원소술사들을 존경하는 듯 하며, 디아 2의 소서리스에게 마법에 대한 가르침을 청하기도 한다.
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
              <td class="text-right">10</td>
              <td class="text-left">생명력</td>
              <td class="text-right">+ 1</td>
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
              <td class="text-right">10</td>
              <td class="text-left">마나</td>
              <td class="text-right">+ 2</td>
              <td class="text-right" colspan="2">1 에너지 포인트는 2 마나를 제공합니다.</td>
            </tr>
            <tr>
              <td class="text-left">에너지</td>
              <td class="text-right">35</td>
              <td>
              </td>
              <td>
              </td>
              <td colspan="2">
              </td>
            </tr>
            <tr>
              <td class="text-left">히트 포인트</td>
              <td class="text-right">40</td>
              <td>
              </td>
              <td>
              </td>
              <td colspan="2">
              </td>
            </tr>
            <tr>
              <td class="text-left">체력</td>
              <td class="text-right">74</td>
              <td>
              </td>
              <td>
              </td>
              <td colspan="2">
              </td>
            </tr>
            <tr>
              <td class="text-left">마나</td>
              <td class="text-right">35</td>
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
      <p>디아블로 2의 스킬 대미지는 무기 대미지에 관계없이 순수 스킬 레벨에만 의존하기 때문에 아이템 자체 성능이나 대미지가 높은 고급 아이템 없이도 무난하게(어디까지나 타 캐릭터에 비해서) 사냥할 수
        있다. 그리고 텔레포트를 기본으로 가지고 있다. 두 이유 때문에 게임 출시 이래 3대 인기 캐릭터 목록에서 어떤 시기 어떤 캐릭터들이 득세를 하든 그 중 한 자리는 항상 소서리스의 몫이었다. 오리지널
        때는 바바리안, 네크로맨서와 더불어 3탑이었고, 1.09 패치때는 아마존과 더불어 투탑이었으며, 1.10 패치 이후에는 햄딘과 더불어 투탑이다. 그리고 밑바닥부터 시작하는 상황이라면 가장 먼저 키우게
        되는 캐릭터. 소서리스가 맨땅에 헤딩으로 아이템을 맞춘 후 앵벌로 다른 캐릭터들의 아이템을 맞추는 식으로 시작하는 게 디아블로 2의 기본 흐름일 정도다. 자타공인 디아블로 2 최고의 효녀.
        디아블로 2: 레저렉션에서도 소서리스의 입지는 죽지 않았다.</p>
      <p>꽤 오랜시간 상점에서 마나물약을 팔지 않아 쪼렙이 정말 힘든 시기도 있었으나 이젠 그것도 옛말이다.</p>
      <p>오리지널 당시엔 쿨타임이라는 개념이 없었기 때문에 마나만 있다면 마구잡이로 스킬을 시전할 수 있었다. 렉 걸릴 때나 볼 수 있는 연사 프로즌 오브를 쉽게 볼 수 있던 시절로, 주로 텔레포트로
        빠르게
        적을 회피한 다음 접근하면 바로 오브를 난사해서 죽이는 패턴.</p>
      <p> 덴 오브 이블 퀘스트의 능력치 초기화가 주어진 이후, 초반에는 주로 파이어+꽃잎 룬워드로 헬 까지 순식간에 진입하는 식의 육성이 이루어진다. 그 밖에 스텔스, 제왕운시, 학식, 통찰력 등
        비교적
        저렴하고 효율 좋은 룬워드 아이템들을 이용하면 육성이 수월하다.</p>
      <p>이후 쿨타임의 필요성을 감지한 제작진이 연속 시전을 빼앗고 대신 스킬 데미지를 높여주는 방향으로 밸런스 조정을 해주었는데, 이게 오히려 소서리스의 화력을 대폭 증가시켜주게 된 계기가 돼
        버렸다. 결국
        초창기 캐릭터 선택은 너도나도 할거없이 소서리스 육성이 대세. 여기에 오큘러스, 샤코 같은 좋은 성능의 아이템을 장비하면 혼자서 광역 스킬로 전 액트를 다 쓸어버리는 무시무시한 성능을 발휘하였다.
      </p>
      <p>다만 최상급 수준의 사냥 능력과는 달리 듀얼에서는 고전하는 편. 1.10 패치 이후 원소대항 아이템 자체가 너무 많아져버렸고, 또한 애니참이나 지옥의 횃불과 같이 저항력을 20씩이나 올려주는
        아이템들도
        생긴 까닭에, 원소마법에 전적으로 의존해야하는 소서리스가 상대적으로 약해졌기 때문이다. 물론 레지스트 세팅이 안된 캐릭터들에게는 양학도 가능할 정도로 강력한 모습을 보여주지만, 세팅이 제대로 된 상대를
        만나면 힘겨운 싸움을 벌일 수 밖에 없으며, 자연히 PK상위급 소서리스 랭커는 상당히 줄어들게 되었다.</p>
      <p> 드루이드와 달리 순수 마법캐이자 전형적인 원거리 공격 캐릭터로 극도로 허약한 힘 및 체력(생명력 1당 2증가)을 가지고 있지만 예외로 마나 증가량(에너지 1당 2증가)은 여타 캐릭터들에 비해
        높다. 하지만 에너지 쉴드에 투자하는 게 아니라면 에너지에는 스탯을 1도 주지 않는 육성이 대세이기 때문에 말짱 황. 디아블로는 앗차하는 사이에 캐릭터가 픽 쓰러지기 십상인 게임인고로 생명력이
        중요하다. 게다가 소서리스는 자체 기술중에 윔쓰라는 대단히 훌륭한 마나회복스킬도 가지고 있으며 1만 찍어줘도 각종 스킬버프 + 자체 마나 증가량 + 약간의 물약 등으로 끊임없는 스킬 시전이
        가능하다.</p>
      <p>시너지 전후에 관계 없이 1원소는 내성에 취약하고 3원소는 되다 만 어중간함 덕분에 무난하게 2원소를 찍었으나, 룬워드 무한의 공간(infinity)의 등장 이후 내성을 쉽게 벗길 수 있게 됨으로써
        저항력 감소가 쉬운 라이트닝 1원소 몰아찍기가 대세. 소서리스 스킬은 대부분 서포트와 관계 없이 마법 자체가 공격 or 방어 그 자체이므로 투자 대비 효율을 생각할 필요 없이 모조리 몰아 찍게 된다.
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
              <td colspan="3"></td>
              <td>0</td>
              <td>7</td>
              <td>15</td>
              <td>27</td>
              <td>48</td>
              <td>86</td>
              <td>200</td>
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
              <td>19</td>
              <td>18</td>
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
            </tr>
            <tr class="frame-rate">
              <td>요구치</td>
              <td>0</td>
              <td>7</td>
              <td>15</td>
              <td>23</td>
              <td>35</td>
              <td>52</td>
              <td>78</td>
              <td>117</td>
              <td>194</td>
              <td colspan="4"></td>
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
            </tr>
            <tr class="frame-rate">
              <td>요구치</td>
              <td>0</td>
              <td>5</td>
              <td>9</td>
              <td>14</td>
              <td>20</td>
              <td>30</td>
              <td>42</td>
              <td>60</td>
              <td>86</td>
              <td>142</td>
              <td>280</td>
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
      <p>A rebellious woman who has wrested the secrets of magic use from the male-dominated Mage-Clans of the East, the
        Sorceress is an expert in mystical creation ex nihilo. Though somewhat lacking in the skills of hand-to-hand
        combat, she compensates for this weakness with fierce combative magic for both offense and defense. Solitary and
        reclusive, the Sorceress acts based on motives and ethics inscrutable to most, and sometimes seems capricious
        and even spiteful. In reality, she understands the struggle between Order and Chaos all too clearly, as well as
        her role as a warrior in this battle.</p>
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
              <td class="text-right">10</td>
              <td class="text-left">Life</td>
              <td class="text-right">+ 1</td>
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
              <td class="text-right">10</td>
              <td class="text-left">Mana</td>
              <td class="text-right">+ 2</td>
              <td class="text-right" colspan="2">1 Energy point gives 2 Mana</td>
            </tr>
            <tr>
              <td class="text-left">Energy</td>
              <td class="text-right">35</td>
              <td></td>
              <td></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td class="text-left">Hit Points</td>
              <td class="text-right">40</td>
              <td></td>
              <td></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td class="text-left">Stamina</td>
              <td class="text-right">74</td>
              <td></td>
              <td></td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td class="text-left">Mana</td>
              <td class="text-right">10</td>
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
      <p>Of all the character classes, the Sorceress is the most dependent on her skills; therefore, she is also the
        most dependent on recharging her spiritual energy. Unless she can supplement her natural and continuous
        replenishment with items to restore Mana, she must develop the Warmth skill. The Warmth skill adds to her
        ability to recharge Mana. In the rest of the skill tree she has more of a choice. Cold spells are certainly
        useful, both in the damage they unleash and in slowing enemies. Additionally, cold spells can at times freeze
        her targets, shattering them upon their death, making resurrection impossible. The Sorceress should develop
        Static Field. This is an extremely effective spell that will benefit both her and other adventurers whom she
        might allow to join her.</p>
      <p>Supplementing the Sorceress' attributes is a more difficult series of decisions. Obviously Energy is always a
        consideration. Strength, while seemingly not important, is needed for the ability to don better armor. The
        Sorceress is cursed with a low vitality, and if hit, she is easily felled. For this reason, the Sorceress is one
        of the more difficult classes to play. She needs to add to her strength for better armor, to her vitality for
        more life, and to her energy so that she can keep casting her spells. Generally, it is wise to pick a level of
        armor to aspire, and then shift all focus away from strength. Many consider the breastplate to be sufficient
        armor. Attaining the level of strength to use this armor is an important goal.</p>
      <p>The Sorceress should always be on the lookout for items that increase Mana regeneration. She should also
        not
        entirely abandon the martial arts and have quality armaments, if only as a backup. Many of Diablo's minions
        possess a great deal of magical defense, and spells are not always effective. It is wise to choose skills from
        throughout the skill tree. Of all the classes though, she must avoid being struck in melee combat, therefore she
        requires the most tactical maneuvering and the most care.</p>
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
              <td colspan="3"></td>
              <td>0</td>
              <td>7</td>
              <td>15</td>
              <td>27</td>
              <td>48</td>
              <td>86</td>
              <td>200</td>
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
              <td>10</td>
              <td>9</td>
              <td>8</td>
              <td>7</td>
            </tr>
            <tr class="frame-rate">
              <td>Required</td>
              <td>0</td>
              <td>7</td>
              <td>15</td>
              <td>23</td>
              <td>35</td>
              <td>52</td>
              <td>78</td>
              <td>117</td>
              <td>194</td>
              <td colspan="4"></td>
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
            </tr>
            <tr class="frame-rate">
              <td>Required</td>
              <td>0</td>
              <td>5</td>
              <td>9</td>
              <td>14</td>
              <td>20</td>
              <td>30</td>
              <td>42</td>
              <td>60</td>
              <td>86</td>
              <td>142</td>
              <td>280</td>
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