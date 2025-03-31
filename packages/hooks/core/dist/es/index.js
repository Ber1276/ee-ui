import { library as e } from "@fortawesome/fontawesome-svg-core";
import { fas as t } from "@fortawesome/free-solid-svg-icons";
import { E as o } from "./Alert-CAdf__Xs.js";
import { a as r, E as i } from "./Button-Pl1Yf8YQ.js";
import { E as l, a as s } from "./Collapse-T6nrb6d2.js";
import { p as c, E as p } from "./ConfigProvider-DNme6hJ8.js";
import { a, u } from "./ConfigProvider-DNme6hJ8.js";
import { E as _, a as d } from "./Dropdown-P0qB3XOS.js";
import { E as h, c as g } from "./Form-aNep-qS_.js";
import { u as u2, a as a2, b } from "./Form-aNep-qS_.js";
import { a as f } from "./Icon-DYFp5whK.js";
import { a as x } from "./Input-BSUh5uv-.js";
import "vue";
import { E as w } from "./Loading-4tvPhfuY.js";
import { v, L, v as v2 } from "./Loading-4tvPhfuY.js";
import { E as T, a as j } from "./Message-B3gdg0W4.js";
import { m } from "./Message-B3gdg0W4.js";
import { E as D } from "./Notification-DtJiELd6.js";
import { a as a3, n } from "./Notification-DtJiELd6.js";
import { E as k } from "./Popconfirm-3at2szd2.js";
import { E, a as P } from "./Select-L9wCdGGE.js";
import { E as y } from "./Switch-CIXK6Nuh.js";
import { E as F } from "./Tooltip-CycW2k9E.js";
import { E as C } from "./Upload-DjSVUaL7.js";
import { h as M, w as A, f as Y } from "./vendor-dolnLWnX.js";
const B = Symbol("INSTALLED_KEY"), z = [r, i, l, s, f, _, d, F, T, x, y, E, P, h, g, o, D, w, C, k, j, p], I = { name: "ja", el: { colorpicker: { confirm: "OK", clear: "クリア" }, datepicker: { now: "現在", today: "今日", cancel: "キャンセル", clear: "クリア", confirm: "OK", selectDate: "日付を選択", selectTime: "時間を選択", startDate: "開始日", startTime: "開始時間", endDate: "終了日", endTime: "終了時間", prevYear: "前年", nextYear: "翌年", prevMonth: "前月", nextMonth: "翌月", year: "年", month1: "1月", month2: "2月", month3: "3月", month4: "4月", month5: "5月", month6: "6月", month7: "7月", month8: "8月", month9: "9月", month10: "10月", month11: "11月", month12: "12月", weeks: { sun: "日", mon: "月", tue: "火", wed: "水", thu: "木", fri: "金", sat: "土" }, months: { jan: "1月", feb: "2月", mar: "3月", apr: "4月", may: "5月", jun: "6月", jul: "7月", aug: "8月", sep: "9月", oct: "10月", nov: "11月", dec: "12月" } }, select: { loading: "ロード中", noMatch: "データなし", noData: "データなし", placeholder: "選択してください" }, cascader: { noMatch: "データなし", loading: "ロード中", placeholder: "選択してください", noData: "データなし" }, pagination: { goto: "", pagesize: "件/ページ", total: "総計 {total} 件", pageClassifier: "ページ目へ", page: "Page", prev: "Go to previous page", next: "Go to next page", currentPage: "page {pager}", prevPages: "Previous {pager} pages", nextPages: "Next {pager} pages" }, messagebox: { title: "メッセージ", confirm: "OK", cancel: "キャンセル", error: "正しくない入力" }, upload: { deleteTip: "Delキーを押して削除する", delete: "削除する", preview: "プレビュー", continue: "続行する" }, table: { emptyText: "データなし", confirmFilter: "確認", resetFilter: "初期化", clearFilter: "すべて", sumText: "合計" }, tour: { next: "次へ", previous: "前へ", finish: "ツアー終了" }, tree: { emptyText: "データなし" }, transfer: { noMatch: "データなし", noData: "データなし", titles: ["リスト 1", "リスト 2"], filterPlaceholder: "キーワードを入力", noCheckedFormat: "総計 {total} 件", hasCheckedFormat: "{checked}/{total} を選択した" }, image: { error: "失敗" }, pageHeader: { title: "戻る" }, popconfirm: { confirmButtonText: "はい", cancelButtonText: "いいえ" }, carousel: { leftArrow: "Carousel arrow left", rightArrow: "Carousel arrow right", indicator: "Carousel switch to index {index}" } } }, S = { name: "ko", el: { colorpicker: { confirm: "확인", clear: "초기화", defaultLabel: "색상 선택기", description: "현재 색상은 {color}입니다. Enter 키를 눌러 새 색상을 선택합니다." }, datepicker: { now: "지금", today: "오늘", cancel: "취소", clear: "초기화", confirm: "확인", dateTablePrompt: "화살표 키를 사용하고 Enter를 눌러 날짜를 선택하십시오.", monthTablePrompt: "화살표 키를 사용하고 Enter를 눌러 월을 선택합니다.", yearTablePrompt: "화살표 키를 사용하고 Enter 키를 눌러 연도를 선택합니다.", selectDate: "날짜 선택", selectTime: "시간 선택", startDate: "시작 날짜", startTime: "시작 시간", endDate: "종료 날짜", endTime: "종료 시간", prevYear: "지난해", nextYear: "다음해", prevMonth: "지난달", nextMonth: "다음달", year: "년", month1: "1월", month2: "2월", month3: "3월", month4: "4월", month5: "5월", month6: "6월", month7: "7월", month8: "8월", month9: "9월", month10: "10월", month11: "11월", month12: "12월", weeks: { sun: "일", mon: "월", tue: "화", wed: "수", thu: "목", fri: "금", sat: "토" }, months: { jan: "1월", feb: "2월", mar: "3월", apr: "4월", may: "5월", jun: "6월", jul: "7월", aug: "8월", sep: "9월", oct: "10월", nov: "11월", dec: "12월" } }, inputNumber: { decrease: "값 증가", increase: "값 감소" }, select: { loading: "불러오는 중", noMatch: "검색된 데이터 없음", noData: "데이터 없음", placeholder: "선택" }, dropdown: { toggleDropdown: "드롭다운 전환" }, cascader: { noMatch: "검색된 데이터 없음", loading: "불러오는 중", placeholder: "선택", noData: "데이터 없음" }, pagination: { goto: "", pagesize: "건/페이지", total: "총 {total} 건", pageClassifier: "페이지로", page: "페이지", prev: "이전 페이지로 이동", next: "다음 페이지로 이동", currentPage: "페이지 {pager}", prevPages: "이전 {pager} 페이지", nextPages: "다음 {pager} 페이지", deprecationWarning: "더 이상 사용되지 않는 동작이 감지되었습니다. 자세한 내용은 el-pagination 문서를 참조하세요." }, dialog: { close: "대화 상자 닫기" }, drawer: { close: "대화 상자 닫기" }, messagebox: { title: "메시지", confirm: "확인", cancel: "취소", error: "올바르지 않은 입력", close: "대화 상자 닫기" }, upload: { deleteTip: "Delete 키를 눌러 삭제", delete: "삭제", preview: "미리보기", continue: "계속하기" }, slider: { defaultLabel: "{min}과 {max} 사이의 슬라이더", defaultRangeStartLabel: "시작 값 선택", defaultRangeEndLabel: "종료 값 선택" }, table: { emptyText: "데이터 없음", confirmFilter: "확인", resetFilter: "초기화", clearFilter: "전체", sumText: "합계" }, tour: { next: "다음", previous: "이전", finish: "종료" }, tree: { emptyText: "데이터 없음" }, transfer: { noMatch: "검색된 데이터 없음", noData: "데이터 없음", titles: ["리스트 1", "리스트 2"], filterPlaceholder: "검색어를 입력하세요", noCheckedFormat: "총 {total} 건", hasCheckedFormat: "{checked}/{total} 선택됨" }, image: { error: "불러오기 실패" }, pageHeader: { title: "뒤로" }, popconfirm: { confirmButtonText: "예", cancelButtonText: "아니오" }, carousel: { leftArrow: "Carousel arrow left", rightArrow: "Carousel arrow right", indicator: "Carousel switch to index {index}" } } }, N = { name: "zh-cn", el: { colorpicker: { confirm: "确定", clear: "清空" }, datepicker: { now: "此刻", today: "今天", cancel: "取消", clear: "清空", confirm: "确定", selectDate: "选择日期", selectTime: "选择时间", startDate: "开始日期", startTime: "开始时间", endDate: "结束日期", endTime: "结束时间", prevYear: "前一年", nextYear: "后一年", prevMonth: "上个月", nextMonth: "下个月", year: "年", month1: "1 月", month2: "2 月", month3: "3 月", month4: "4 月", month5: "5 月", month6: "6 月", month7: "7 月", month8: "8 月", month9: "9 月", month10: "10 月", month11: "11 月", month12: "12 月", weeks: { sun: "日", mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六" }, months: { jan: "一月", feb: "二月", mar: "三月", apr: "四月", may: "五月", jun: "六月", jul: "七月", aug: "八月", sep: "九月", oct: "十月", nov: "十一月", dec: "十二月" } }, select: { loading: "加载中", noMatch: "无匹配数据", noData: "无数据", placeholder: "请选择" }, cascader: { noMatch: "无匹配数据", loading: "加载中", placeholder: "请选择", noData: "暂无数据" }, pagination: { goto: "前往", pagesize: "条/页", total: "共 {total} 条", pageClassifier: "页", page: "页", prev: "上一页", next: "下一页", currentPage: "第 {pager} 页", prevPages: "向前 {pager} 页", nextPages: "向后 {pager} 页", deprecationWarning: "你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档" }, messagebox: { title: "提示", confirm: "确定", cancel: "取消", error: "输入的数据不合法!" }, upload: { deleteTip: "按 delete 键可删除", delete: "删除", preview: "查看图片", continue: "继续上传" }, table: { emptyText: "暂无数据", confirmFilter: "筛选", resetFilter: "重置", clearFilter: "全部", sumText: "合计" }, tour: { next: "下一步", previous: "上一步", finish: "结束导览" }, tree: { emptyText: "暂无数据" }, transfer: { noMatch: "无匹配数据", noData: "无数据", titles: ["列表 1", "列表 2"], filterPlaceholder: "请输入搜索内容", noCheckedFormat: "共 {total} 项", hasCheckedFormat: "已选 {checked}/{total} 项" }, image: { error: "加载失败" }, pageHeader: { title: "返回" }, popconfirm: { confirmButtonText: "确定", cancelButtonText: "取消" }, carousel: { leftArrow: "上一张幻灯片", rightArrow: "下一张幻灯片", indicator: "幻灯片切换至索引 {index}" } } }, H = { name: "zh-tw", el: { colorpicker: { confirm: "確認", clear: "清空", defaultLabel: "色彩選擇器", description: "目前色彩為 {color}。按一下 Enter 以選擇新色彩。" }, datepicker: { now: "現在", today: "今天", cancel: "取消", clear: "清空", confirm: "確認", dateTablePrompt: "使用方向鍵與 Enter 鍵以選擇日期", monthTablePrompt: "使用方向鍵與 Enter 鍵以選擇月份", yearTablePrompt: "使用方向鍵與 Enter 鍵以選擇年份", selectedDate: "已選日期", selectDate: "選擇日期", selectTime: "選擇時間", startDate: "開始日期", startTime: "開始時間", endDate: "結束日期", endTime: "結束時間", prevYear: "前一年", nextYear: "後一年", prevMonth: "上個月", nextMonth: "下個月", year: "年", month1: "1 月", month2: "2 月", month3: "3 月", month4: "4 月", month5: "5 月", month6: "6 月", month7: "7 月", month8: "8 月", month9: "9 月", month10: "10 月", month11: "11 月", month12: "12 月", weeks: { sun: "日", mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六" }, weeksFull: { sun: "星期日", mon: "星期一", tue: "星期二", wed: "星期三", thu: "星期四", fri: "星期五", sat: "星期六" }, months: { jan: "一月", feb: "二月", mar: "三月", apr: "四月", may: "五月", jun: "六月", jul: "七月", aug: "八月", sep: "九月", oct: "十月", nov: "十一月", dec: "十二月" } }, inputNumber: { decrease: "減少數值", increase: "增加數值" }, select: { loading: "載入中", noMatch: "無相符資料", noData: "無資料", placeholder: "請選擇" }, dropdown: { toggleDropdown: "切換下拉選單" }, cascader: { noMatch: "無相符資料", loading: "載入中", placeholder: "請選擇", noData: "無資料" }, pagination: { goto: "前往", pagesize: "項/頁", total: "共 {total} 項", pageClassifier: "頁", page: "頁", prev: "上一頁", next: "下一頁", currentPage: "第 {pager} 頁", prevPages: "向前 {pager} 頁", nextPages: "向后 {pager} 頁", deprecationWarning: "偵測到已過時的使用方式，請參閱 el-pagination 說明文件以了解更多資訊" }, dialog: { close: "關閉此對話框" }, drawer: { close: "關閉此對話框" }, messagebox: { title: "提示", confirm: "確定", cancel: "取消", error: "輸入的資料不符規定!", close: "關閉此對話框" }, upload: { deleteTip: "按一下 Delete 鍵以刪除", delete: "刪除", preview: "查看圖片", continue: "繼續上傳" }, slider: { defaultLabel: "滑桿介於 {min} 至 {max}", defaultRangeStartLabel: "選擇起始值", defaultRangeEndLabel: "選擇結束值" }, table: { emptyText: "暫無資料", confirmFilter: "篩選", resetFilter: "重置", clearFilter: "全部", sumText: "合計" }, tour: { next: "下一步", previous: "上一步", finish: "結束導覽" }, tree: { emptyText: "暫無資料" }, transfer: { noMatch: "無相符資料", noData: "無資料", titles: ["列表 1", "列表 2"], filterPlaceholder: "請輸入搜尋內容", noCheckedFormat: "共 {total} 項", hasCheckedFormat: "已選 {checked}/{total} 項" }, image: { error: "載入失敗" }, pageHeader: { title: "返回" }, popconfirm: { confirmButtonText: "確認", cancelButtonText: "取消" }, carousel: { leftArrow: "上一張投影片", rightArrow: "下一張投影片", indicator: "投影片切換至索引 {index}" } } };
!function() {
  {
    const e2 = "\n________________________________________________\n\n   _______        __        _______  _______ \n  |    ___|.----.|__|.----.|   |   ||_     _|\n  |    ___||   _||  ||  __||   |   | _|   |_ \n  |_______||__|  |__||____||_______||_______|\n                                           \n________________________________________________\n              author:EricWXY\n", t2 = "\nbackground: linear-gradient(135deg, orange 60%, cyan);\nbackground-clip: text;\ncolor: transparent;\nfont-size: 16px; \nline-height: 1;\nfont-family: monospace;\nfont-weight: 600;\n";
    console.info(`%c${e2}`, t2);
  }
}(), e.add(t);
const K = (R = z, (e2, t2) => {
  M(e2, B) || (A(e2, B, true), Y(R, (t3) => {
    e2.use(t3);
  }), t2 && c(t2, e2, true));
});
var R;
export {
  o as ErAlert,
  r as ErButton,
  i as ErButtonGroup,
  l as ErCollapse,
  s as ErCollapseItem,
  p as ErConfigProvider,
  _ as ErDropdown,
  d as ErDropdownItem,
  h as ErForm,
  g as ErFormItem,
  f as ErIcon,
  x as ErInput,
  w as ErLoading,
  v as ErLoadingDirective,
  L as ErLoadingService,
  T as ErMessage,
  j as ErMessageBox,
  D as ErNotification,
  P as ErOption,
  k as ErPopconfirm,
  E as ErSelect,
  y as ErSwitch,
  F as ErTooltip,
  C as ErUpload,
  K as default,
  a as en,
  I as ja,
  S as ko,
  m as messageTypes,
  a3 as notificationPosition,
  n as notificationTypes,
  c as provideGlobalConfig,
  u2 as useFormDisabled,
  a2 as useFormItem,
  b as useFormItemInputId,
  u as useGlobalConfig,
  v2 as vLoading,
  N as zhCn,
  H as zhTw
};
