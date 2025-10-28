// DOM API
// 1) 태그
/*
-- 메소드
      document.querySelector()
      document.querySelectorAll()

      document.getElementById()
      document.getElementsByTagName()
      document.getElementsByClassName()

-- 관계 관련 속성
      부모 : parentElement
      자식 : children, firstElementChild, lastElementChild
      형제 : previousElementSibling, nextElementSibling
*/

// 2) Event
/* 
-1) 이벤트 버블링
-2) document.addEventListener('이벤트명',이벤트 핸들러)
-3) 이벤트 객체
  1. target : 실제 이벤트가 발생한 태그(고정값)
  2. currentTarget : 이벤트가 전파된 태그(유동값)
  3. preventDefault()
  4. stopPropagation()
*/
