import { ResponsiveLine } from "@nivo/line";

const DataVisualization = () => {
  //pt-5는 건드리면 안됨

  //임시 데이터
  const data = [
    {
      id: "score",
      data: [
        {
          x: "1월",
          y: 240,
        },
        {
          x: "2월",
          y: 27,
        },
        {
          x: "3월",
          y: 31,
        },
        {
          x: "4월",
          y: 15,
        },
        {
          x: "5월",
          y: 57,
        },
        {
          x: "6월",
          y: 101,
        },
        {
          x: "7월",
          y: 230,
        },
        {
          x: "8월",
          y: 26,
        },
        {
          x: "9월",
          y: 115,
        },
        {
          x: "10월",
          y: 120,
        },
        {
          x: "11월",
          y: 152,
        },
        {
          x: "12월",
          y: 37,
        },
      ],
    },
  ];

  return (
    <div className="pt-5 flex flex-col gap-5">
      <h1 className="font-semibold font-['Inter'] text-s ">
        점수 통계
      </h1>
      {/* 그래프 영역: 높이 고정 (20rem = 320px), 너비는 전체 */}
      <section className="h-[20rem] w-full">
        <ResponsiveLine
          data={data} // 그래프에 사용할 시계열 데이터
          // 그래프 전체 padding: 레이블 공간 확보
          margin={{ top: 20, right: 30, bottom: 50, left: 30 }}
          // Y축 스케일 설정
          yScale={{
            type: "linear", // 선형 스케일
            min: "0", // 최소값은 자동 결정
            max: "auto", // 최대값도 자동
            stacked: true, // 여러 시리즈가 있으면 누적
            reverse: false, // y값이 클수록 위쪽으로 표시
          }}
          // X축 설정
          axisBottom={{
            legend: "month", // 축 이름
            legendOffset: 36, // 축 이름 위치 (아래 여백)
          }}
          // Y축 설정
          axisLeft={{
            legend: "score", // 축 이름
            legendOffset: -40, // 축 이름 왼쪽으로 이동
          }}
          // 점 표시 여부 (false: 선만 보임)
          enablePoints={false}
          // X축 방향의 격자선 표시 여부
          enableGridX={false}
          // 포인트 크기 (비활성화 되어 있어 영향 없음)
          pointSize={10}
          // 포인트 내부 색상 (테마 배경과 동일)
          pointColor={{ theme: "background" }}
          // 포인트 테두리 두께
          pointBorderWidth={2}
          // 포인트 테두리 색상 (시리즈 색상과 동일)
          pointBorderColor={{ from: "seriesColor" }}
          // 선 색상 (단일 시리즈라 배열로 지정)
          colors={["#374B6B"]}
          // 포인트 라벨 위치 조정 (위로 12px 띄움)
          pointLabelYOffset={-12}
          // 터치 기반 교차선 활성화 (모바일 대응)
          enableTouchCrosshair={true}
          // 선 아래 채워진 면 보이게 함
          enableArea={true}
          // 마우스 오버 시 십자선 비활성화
          enableCrosshair={false}
          // 마우스 hover 영역 확대 (tooltip에 반응 잘하도록)
          useMesh={true}
          // 마우스 hover 시 툴팁 표시 (false: 비활성화)
          isInteractive={false}

          // legends 옵션은 주석 처리됨: 범례 비표시 중
        />
      </section>
    </div>
  );
};
export default DataVisualization;
