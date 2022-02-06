  //주석없는 버전은 pull requests에 vscode의 정규식으로 제거
 //Pull Requests의 Resolve conflict를 누르면 됨
    function removeArea()   //버튼 클릭하면 li가 사라지는 함수
    {
        const active=document.getElementById('active'); 
        //javascript의 자식노드를 잡기위해 a 설정
        //const로 설정한 이유는 값이 바뀌지도 않고 변수를 재선언할 일도 없기 떄문
        const childLi=active.getElementsByTagName('li');
        //a의 li만 지워도 li,text,checkbox 다 지워지기 떄문에 a의 하위태그인 li를 childLi에 넣어둠
        //다른언어로 아주 쉽게 설명하자면 childLi는 a의 자식태그인 li의 변수를 모은 배열타입이라고 생각
        if(childLi.length>0)  
        {
            childLi[childLi.length-1].remove(); 
            //a안에 원소가 하나 담겨있으면 a.length는 1이고, a의 마지막원소는 0번째 index에 있음
            //a안에 원소가 2개 담겨있으면 a.length는 2이고, a의 마지막원소는  1번째 index에 있음
        }
    }
    /*
        html을 잘보면 <li> <checkbox> </checkbox> </li> 이런식으로 li안에 checkbox가 포함되어 있기 때문에
        checkbox를 지우면 li도 같이 사라지는 것

        따로 앞에 사라지는 함수를 만드려고 위의 코드를 만드려다 너무 주석이 길어질 것 같아 변수명을 다시 바꿨는데
        함수는 저기서 childLi[childLi.length-1].remove()를 childLi[0].remove();만 바꾸면 됨
        그리고 li에 있는 함수가 하나도 없으면 부모 li를 지우고 싶으면 상황에 따라 달라지겠지만
        자식 li를 다 삭제하고 한번 더 삭제하고 이후 부모 li를 삭제하고 싶으면  
        else if(chlidLi.length==0) 
        {
            const li=document.getElementesByTagName('li');
            if(li.length>0)
            {
                li[li.length-1].remove();
            }
        }
        else if에 넣은다음에 선언을 조건문안에서 하는 이유는 이렇게 하면 컴파일 최적화가 일어나서 거의 없겠지만
        아주 약간 최적화
        그리고 지역변수로 선언되기 떄문에 큰 프로젝트에서 관리할 때 전역변수를 사용할 때 보다 효과적으로 사용할 수 있음

    */
    function removeText()
    {
        const textSetting=document.getElementById('textSetting');
        textSetting.value='';
    }
    //textSetting의 id를 그대로 변수에 받아서 value 안의 값을 ''로 만들어서 지움
    function addArea()
    {
        const active=document.getElementById('active');  
        const li=document.createElement('li');
        const TextSetting=document.getElementById('textSetting');
        try{    //TextSetting이랑 data-set에서 에러가 연속으로 잡혀서 try-catch문으로 에러출력해서 
        //수정함
        const text=document.createTextNode(TextSetting.value); 
       
        const cbmake=document.createElement('input');
        cbmake.type="checkbox";
        cbmake.className="checkboxContent";
        //checkboxContent추가
        
        li.appendChild(text); //<li text: ></li>
        li.appendChild(cbmake); 
        /*<li> <input type="checkbox data-type="checkboxContent"></input></li>
            appenChild는 리턴타입이 있으며 node는 한번에 하나만 받을 수 있고 append는 한번에 
            여러개의 노드를 받을 수 있지만 리턴 타입이 없음 
            그리고 appendChild는 부모의 마지막 자식으로 들어감
        */
        active.lastChild.previousSibling.appendChild(li); //active의 마지막 노드는 공백이므로 공백에
        //li를 넣을 수 없음 previosSibling은 그 전 노드로 가기때문에 그 공백전인 영역의 뒤로 감
        }
        catch(error)
        {
            alert(error);
        }
          //뒷 부분을 더하고 싶으면 insertBefore활용하면 됨
    }
  
    function renameText()
    {
        const checkboxgrouping=document.querySelectorAll('[class=checkboxContent]');
        
        for(var name in checkboxgrouping)   //for(var name:checkboxgroping)
        {
            
            if(checkboxgrouping[name].checked===true) //체크박스가 체크되어있을 때
            {
                checkboxgrouping[name].checked=false;   //체크한것이 지워짐
                const TextSetting=document.getElementById('textSetting');   
                checkboxgrouping[name].parentNode.firstChild.textContent=TextSetting.value;
                //체크되어있는 것의 부모의 첫번째 자손(체크한 것)의 텍스트를 텍스트타입의 value로 바꿈
                console.log(checkboxgrouping[name]);
                //체크한 것의 타입을 콘솔에 출력   
            }
        }
  
    }
