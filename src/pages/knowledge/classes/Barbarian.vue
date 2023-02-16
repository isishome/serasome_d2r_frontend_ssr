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
      <p>고대의 위대한 왕, 배짱과 용기의 화신 불카토스(Bul-Kathos)의 후손들이라고 주장하는 강인한 전사들. 이 전사들은 문명의 외곽 지역에서 세계석이 봉인된 아리앗 산을 지키고 있으며, 이것을
        자신들의 신성한 의무이자 운명이라고 믿는다. 또한 영토 곳곳을 두루두루 사수하기 위해 어느 한 곳에 정착하지 않고 영토 내부에서 이리저리 떠돌면서 유목 생활을 하고 있다. 덕분에 언제 어디서 침략을
        당해도 민첩하게 대처해낸다. 아리앗산 일대를 정복하려는 시도는 항상 야만용사 부족의 맹렬한 저항을 받고 무산되어 왔다. 서부원정지의 라키스와 코렐란은 원정으로 이들을 정복하려 했으나 대차게 실패하고,
        '철벽의 성채'를 지어 이들을 견제한다.</p>
      <p>이들은 외부의 접근을 허락치 않는 대신 스스로도 바깥 세상과의 접촉을 끊고 자기네 영토 안에서만 지내며, 약탈이나 전투를 할 때만 외부로 나왔다고 한다. 드물게 바깥 세상에서 용병으로 활동하는 이들은
        괜히
        싸움판을 벌인다든가, 미친 듯이 무쌍을 벌인다든가, 동료들의 힘을 끌어낸다던가 하는 모습으로 유명하다.</p>
      <p>강인한 육체와 엄청난 괴력, 그리고 아주 호전적인 성격과 거만한 태도로 유명하다. '겁도 없이 보물을 노리고 왔던 풋내기 보물사냥꾼이 눈 깜짝할 사이에 고용한 용병들을 죄다 잃었다든가 하는 이야기가
        전설처럼 전해지기도 한다. 육체를 강하게 만들기 위해 야만용사 부족은 척박한 야생에서 지내면서 자연과 친숙해지는 법을 발전시켜 왔다. 그 결과 초인적인 경지에 도달한 야만용사들은 자연으로부터 원시
        에너지를
        얻고 적과 아군의 정신에 영향을 주는 능력을 얻었다. 육체적인 힘을 중시하는지라 마법이나 복잡한 도구 같은 건 거부하며, 이런 것들은 육체 단련에 걸림돌만 된다고 생각한다. 일반적인 문명 세계 아이들과
        달리 이들 부족은 어릴 때부터 직접 무기를 만들고 다루어 스스로 살아남는 법을 터득하게 된다. 티리엘이 아리앗산의 세계석을 파괴해 아리앗산이 파괴되기전에 대략 32개의 부족이 존재했었다고 한다.
      </p>
      <p>무속 신앙을 신봉하고 있으며, 자기네가 신성하게 여기는 동물의 영혼을 강령시키면 범상치 않은 힘과 능력을 얻고 전투 기술을 향상시킬 수 있을 거라 믿고 있다. 전장에 나갈 때는 야만스러운 장식을 달고
        무시무시한 분장을 칠해서 겉모습만으로 적들에게 맹렬한 공포를 느끼게 한다. 용맹과 힘을 숭상하는 모습, 전장에서의 잔혹한 모습 등을 본 '문명인'들은 야만용사 부족을 '야만인'이라고 멸시한다. 하지만
        성역을 답사하는 학자 압드 알 하지르는 "사람들은 그렇게 생각하지만, 이들은 누구보다 고결한 민족이었소."라고 알려준다. 특히 야만용사의 도시인 세체론이나 하로가스를 보면 나름대로의 문명을 가진
        민족이라는
        것을 알수 있다.거만하고 호전적인 태도를 보고 자칫 간과하기 쉬운 점이지만 그들 역시 악을 끔찍하게 싫어하며 선과 정의를 따르며 싸우는 민족이다.</p>
      <p>디아블로 3의 할아버지 야만용사는 본래 디아블로 2의 젊은 대머리 야만용사 본인으로 계획되었으나 스토리를 게임으로 구현하는 데에 심각한 애로사항만 만들어내 결국 무산되었다. 티리엘과 면식이 있고
        세계석의
        정체와 세계석 파괴의 전황을 알고 대악마들과 싸운 경험이 있는 등 끝도 없다. 이 모든 것을 야만용사에게 지나친 특별대우를 해 주지 않는 선에서 다 반영하는 것은 상당히 어려웠을 것이다. 그래도 아리앗
        산이 무너진 이야기 등을 하는 걸 보면 아주 관련이 없는 것도 아닌 듯.</p>
      <p>디아블로 3 시점에서는 어떻게 지내고 있는지 불명이다. 아리앗 산이 붕괴됨에 따라 다른 야만용사들과 마찬가지로 고통을 겪고 있을지도. 본래는 3편의 야만용사와 동일인물로 설정하려고 3편의 야만용사를
        백발이
        성성한 노장 외모로 만들었으나 스토리상 연결과 전개에 여러 난점 때문에 3편의 야만용사와는 별개의 인물이 됐다. 디아블로 1 주인공들이 2에서 어떤 꼴이 되었는지 생각해 보면 무소식이
        희소식이다...
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
              <td class="text-right">30</td>
              <td class="text-left">생명력</td>
              <td class="text-right">+ 2</td>
              <td class="text-right" colspan="2">1 활력 포인트는 4 생명력을 제공합니다.</td>
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
              <td class="text-right">+ 1</td>
              <td class="text-right" colspan="2">1 에너지 포인트는 1 마나를 제공합니다.</td>
            </tr>
            <tr>
              <td class="text-left">에너지</td>
              <td class="text-right">10</td>
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
              <td class="text-right">92</td>
              <td>
              </td>
              <td>
              </td>
              <td colspan="2">
              </td>
            </tr>
            <tr>
              <td class="text-left">마나</td>
              <td class="text-right">10</td>
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
      <p>일반적인 캐릭터 육성이 사용 스킬에 따라서 종류가 나뉘는 것에 비하여 바바리안은 활과 쇠뇌, 클러, 대거 외의 무기에 특화하는 웨폰 마스터리라는 기술 덕분에, 사용 무기별로 다양한 유형의
        바바리안이 존재한다. 대부분의 바바리안 필수투자 스킬은 훨윈드, 버프계열 함성이다.</p>
      <p>오리지널 바바리안은 심각한 문제인 게 헬 난이도에서 물리 이뮨을 잡기가 무진장 힘들다. 정확히는 물리 이뮨 + 마나 번 몬스터를 버서크로 잡아야 하는데 맞을때마다 마나가 타서 없어지니 쓰질
        못한다. 챔피언 몬스터만 물리 이뮨을 달고 나오면 그래도 괜찮은데 가장 X같은 녀석은 레이스들... 이녀석들은 무더기로 나오는데 마나태우고 물리내성도 달려서 성가시다. 룬워드가 있던 때도 아니고,
        유니크에서도
        속성 데미지가 쓸 만한 녀석이 없기 때문에 무기 2개에 젬 6개 박아 봤자 속성 데미지가 너무 낮아서 헬 난이도에서는 간지러운 수준.</p>
      <p>하지만 오리지널에서는 휠윈드가 공속에 영향 받지 않고 히트 수 제한이 없기 때문에 물리 이뮨이 아니면 다 썰어버렸었다. 이동속도가 낮으면 낮을수록 목표지점에 가는 동안 계속 때리기 때문. 대신 무기
        데미지가 낮으면 내구도가 팍팍 내려간다.</p>
      <p>이런저런 애로사항이 있긴 하지만 함성과 각종 패시브 덕에 룬워드 연기 갑옷과 디파이언스 용병만 있어도 헬 난이도에서 어느 정도 비빌 수 있다는 점은 메리트라고 할 수 있을 것이다.</p>
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
            </tr>
            <tr class="frame-rate">
              <td>요구치</td>
              <td colspan="5"></td>
              <td>0</td>
              <td>9</td>
              <td>20</td>
              <td>42</td>
              <td>86</td>
              <td>280</td>
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
              <td>9</td>
              <td>20</td>
              <td>37</td>
              <td>63</td>
              <td>105</td>
              <td>200</td>
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
              <td>3</td>
              <td>2</td>
            </tr>
            <tr class="frame-rate">
              <td>요구치</td>
              <td colspan="4"></td>
              <td>0</td>
              <td>7</td>
              <td>15</td>
              <td>27</td>
              <td>48</td>
              <td>86</td>
              <td>200</td>
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
      <p>The Barbarian, a member of any of several tribes on the fringes of civilization, rebuffs the influence of those
        he sees as soft and weak.
      </p>
      <p>
        Endless clan warfare and the constant struggle to survive in the hostile wilderness are reflected in the
        Barbarian’s sturdy and powerful frame. Though perhaps lacking the sophistication of city-folk, the Barbarian has
        an acute awareness of his surroundings. Because of his shamanistic belief in the animal powers with whom he
        identifies, the Barbarian is sometimes associated with stories of lycanthropy. In fact, he believes he can call
        upon totemic animal spirits to infuse him with supernatural strengths and abilities, but these only work to
        improve his already superb battle-tactics.</p>
      <p>
        The Barbarian is considered to be an improvement over the Warrior class available in Diablo I. The Barbarian’s
        most innovative feature is the ability to wield two weapons at the same time. Allotting points to his ‘Double
        Swing’ skill in his Combat Actions tree will optimize this ability, enabling him to perform a quick attack with
        both weapons. Coupled with Skill Synergies, any Barbarian has the potential to become a potent fighter.</p>
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
              <td class="text-right">30</td>
              <td class="text-left">Life</td>
              <td class="text-right">+ 2</td>
              <td class="text-right" colspan="2">1 Vitality point gives 4 Life</td>
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
              <td class="text-right">+ 1</td>
              <td class="text-right" colspan="2">1 Energy point gives 1 Mana</td>
            </tr>
            <tr>
              <td class="text-left">Energy</td>
              <td class="text-right">10</td>
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
              <td class="text-right">92</td>
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
      <p>Being a melee specialist, a Barbarian should be mindful of his health and keep a plentiful stock of health
        potions. Luckily he possesses Find Potion and this will aid him in successfully harvesting a health potion from
        the body of a slain monster. At higher levels, if he charges into a situation he’s not ready to handle he has a
        leap skill that will enable him to jump over the pack and into safety. From there he’s more than capable of
        putting some distance between himself and his opponents as he has the highest amount of stamina out of any of
        the classes and can run for a good distance before needing to rest to replenish his stamina.</p>
      <p>To enhance his Combat Skills the Barbarian has an entire tree dedicated to Combat Masteries. All are Clvl six
        and below and is the only section of any tree that does not have prerequisites. In other words, the first skill
        point you get can be used on any of the six masteries available. All masteries are passive and thus do not
        require activating, so as soon as a single point has been added he will begin to enjoy increased proficiency in
        that weapon.</p>
      <p>Whereas the first couple of Acts present no problems for the Barbarian, defeating enemies becomes more
        difficult
        as the game progresses as he encounters more magic-oriented foes. He’ll need to watch his resistances as he
        doesn’t really specialize in long-ranged attacks so the chances of him being successfully hit by a spell-caster
        when going toe-to-toe is high. This problem is compounded by the fact that the Natural Resistance skill doesn’t
        become available until he’s reached Clvl 30.</p>
      <p>The only long-ranged weapon skill the Barbarian possesses is Double Throw, with Throwing Mastery serving as the
        only way to enhance this. However, points can’t be added to the former until he reaches a Clvl of 12.
      </p>
      <p>Dual-wielding weapons presents another problem. Placing a weapon in the off-hand slot deprives the Barbarian of
        a shield which, consequently, leaves him more vulnerable to melee foes due to a lower AC. The warcry Shout may
        serve as a method to counter this.</p>
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
            </tr>
            <tr class="frame-rate">
              <td>Required</td>
              <td colspan="5"></td>
              <td>0</td>
              <td>9</td>
              <td>20</td>
              <td>42</td>
              <td>86</td>
              <td>280</td>
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
              <td>9</td>
              <td>20</td>
              <td>37</td>
              <td>63</td>
              <td>105</td>
              <td>200</td>
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
              <td>2</td>
            </tr>
            <tr class="frame-rate">
              <td>Required</td>
              <td colspan="4"></td>
              <td>0</td>
              <td>7</td>
              <td>15</td>
              <td>27</td>
              <td>48</td>
              <td>86</td>
              <td>200</td>
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