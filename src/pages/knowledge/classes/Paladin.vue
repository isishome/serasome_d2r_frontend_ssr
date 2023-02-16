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
      <p>팔라딘은 자카룸 교단의 기사단이다. 팔라딘의 시초는 12세기 중반으로 거슬러 올라간다. 동부 대륙에 위치한 자카룸 교단은 서부 대륙에도 포교하기 위해 선교사들을 파견했지만 강도나 몬스터 등의 습격
        때문에 대부분 죽고 말았다. 이에 자카룸 교단은 선교사들을 보호하기 위해 성기사단을 양성했으며 이것이 팔라딘의 시초다. 당시 성기사단의 이름은 "Protectors of the Word"였다. 어쨌든
        팔라딘을 동행시켜 다시 선교사들을 파견했는데, 정작 서부 대륙 사람들은 약해빠진 선교사의 설교보다는 용맹한 팔라딘의 모습에 더 깊은 인상을 받아 자카룸으로 개종했다. 아무튼 팔라딘 덕분에 서부 대륙의
        포교는 매우 성공적이었다.</p>
      <p>다만, 야만용사들이나 수도사들과는 좋지 못한 과거사가 있는데 라키스가 이끄는 자카룸 교단의 원정대가 서부대륙에서 포교를 할 때 이브고로드와 아리앗 산의 사람들은 이에 강하게 반발하며 자카룸교를
        받아들이기를 거부했고 때문에 성기사들과 수도사, 야만용사들 사이에서 치열한 전쟁이 있었다. 결국 라키스도 이 지역들에 대한 포교를 포기했고 엔티스티그와 칸두라스를 개종시킨 것으로 만족해야 했다. 하지만
        미련이 남았는지 라키스는 서부원정지에 왕국을 건설하고 성공적으로 나라를 다스리면서 이후에 아리앗 산의 야만용사 부족을 공격했다. 다만 여전히 뜻을 이루지는 못했다.</p>
      <p>몇십 년 뒤, 팔라딘은 자카룸 교단으로부터 새로운 임무를 부여 받았다. 이번 임무는 악의 세력을 없애기 위한 원정으로 일종의 종교 재판이었다. "자카룸의 손(Hand of Zakarum)"이라는
        새로운
        성기사단의 지휘 아래 원정이 시작되었는데, 자카룸의 손은 악마의 손길이 뻗힌 곳이면 어디라도 찾아가 마을과 주민들을 남김없이 쓸어버렸다. 이런 살육을 자행하게 된 이유는 대악마 메피스토에 의해 교단이
        타락했기 때문이다. 자카룸교의 본거지인 쿠라스트의 자카룸 교단은 메피스토의 봉인을 굳건히 지키고 있었는데, 결국 메피스토의 영향 아래 들어가 대주교들을 포함한 교단 신도 대다수가 타락한 것이다(이때
        타락하지 않고 저항한 교황 칼림은 타락한 대주교들의 손에 갈갈이 찢겨 죽는다).</p>
      <p>타락한 교단이 자행하는 피비린내 나는 살육을 보다 못한 일부 팔라딘들이 반기를 들었다. 이들은 팔라딘의 임무는 무고한 사람들을 지키는 것이지 학살하는 게 아니라고 주장하며, 타락한 자카룸 교단을
        떠나버렸다. 그렇게 자카룸을 등진 팔라딘들은 진정한 악의 원흉인 바알, 메피스토, 그리고 디아블로와 싸울 것을 결의하며 서쪽으로의 모험을 시작하였다.</p>
      <p>요약하자면, 게임에 나오는 플레이어 팔라딘은 원래 서부원정지의 자카룸 성기사단에 속해 있었는데, 교단이 일으키는 학살과 광기에 낙심해 교단에서 뛰쳐나와 직접 악마들을 상대하러 나간 집단의 일원이라고도
        볼 수 있다. 그래서인지 팔라딘으로 액트3까지 갈 경우 올머스가 그에 관련된 얘기를 해주기도 한다.</p>
      <p>하지만 나머지 팔라딘들은 아직도 타락한 자카룸 교단의 명령을 수행하는 듯하다. 자카룸 출신 중에서 타락하지 않은 자들은 서부로 원정을 떠난 소수의 성기사(팔라딘)들과 200년 전 타락의 근본적 원인을
        제거하러 동쪽으로 떠난 성전사들 정도다.
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
              <td class="text-right">25</td>
              <td class="text-left">생명력</td>
              <td class="text-right">+ 2</td>
              <td class="text-right" colspan="2">1 활력 포인트는 3 생명력을 제공합니다.</td>
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
              <td class="text-right">89</td>
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
      <p>오라 중에는 잉여 스킬이 많고, 상위 호환되는 오라가 분명히 존재하는 데다가 무엇보다도 한 번에 하나만 켤 수 있기 때문에 선행이나 시너지 스킬이 아니라면 찍을 이유가 없다. 따라서 반드시 키워야
        하는 스킬과 지나가려고 찍는 스킬, 건드리면 망하는 스킬이 확연히 나뉜다.
        대체로 한 가지로 올인하면 보스·사냥·PK 중 하나는 취약하게 되므로, 두 가지를 조합하여 키우게 되는 편. 다만 물리 공격을 위주로 할 때는 공격 오라의 파나티시즘(Fanaticism), 원소공격
        위주일 때는 컨빅션(Conviction), 블레시드 해머는 예외적으로 컨센트레이션(Concentration) 오라를 마스터 하는 것이 기본이다. 단 컨빅션은 올릴수록 상승 폭이 적어지므로 일정 단위에서
        멈추고 아이템으로 충당하는 경우도 많다.
        아래는 육성 유형. 공통 사항으로 해머딘이 아니라면 사냥 및 내성을 대비해 각각 질과 벤전스에 1이라도 투자하며, 어떤 유형이라도 방패를 사용한다면 홀리 쉴드를 최소 1 투자하거나 아예 마스터한다.
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
              <td>3</td>
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
      <p>The Knights of Westmarch who felled the armies of mighty Leoric are pure at heart and closely follow the
        teachings of Zakarum, the Religion of the Light. A battle-ready warrior for whom faith is a shield, the Paladin
        fights for what he believes to be right.

        His steadfastness gives him powers to bestow blessings to his friends and wreak cruel justice on foes. There are
        those who call the Paladin an overwrought zealot, but others recognize in him the strength and goodness of the
        Light.</p>
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
      <p>The Paladin is perhaps the most useful addition to any party, as he can extend his Auras to his allies. Skilled
        in melee combat, he is a skilled fighter as well as proficient in magic abilities. In his skill tree, Prayer is
        of considerable use as it regenerates health for him and his allies. Might adds to the effect of the Paladin or
        party member attack. Thorns damages anyone who attacks a person bearing the Aura. Smite allows the Paladin to
        call upon the power of his righteousness to aid him and his friends. As he progresses in power, he should
        continue to develop along the skill tree to aid him in the deeper depths of the world.</p>
      <p>Due to his wide range of abilities, developing the Paladin's characteristics is a difficult matter. He does not
        require as much energy as the Sorceress since many of his skills are passive and use less Mana. He should
        develop strength for donning equipment and inflicting more damage. At the start of gameplay, his vitality is
        less of a concern, but as he faces higher-level monsters he must develop this as well. He also must increase his
        dexterity as this adds both to his defensive rating and his ability to successfully strike opponents.</p>
      <p>The Paladin is largely reliant on finding quality items. In general, it is wise to find a quality one-handed
        item, which allows him to carry a shield in the other hand. A good shield is important both for blocking and a
        higher armor rating. Additionally, a socketed shield can be equipped with gems that add to its resistance. This
        can be of considerable use in some of the more difficult dungeons.</p>
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
              <td>3</td>
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