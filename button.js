
 
    function removeArea()   
    {
        const active=document.getElementById('active'); 
        const childLi=active.getElementsByTagName('li');
        if(childLi.length>0)  
        {
            childLi[childLi.length-1].remove(); 
        }
    }
    function removeText()
    {
        const textSetting=document.getElementById('textSetting');
        textSetting.value='';
    }
     
    function addArea()
    {
        const active=document.getElementById('active');  
        const li=document.createElement('li');
        const TextSetting=document.getElementById('textSetting');     
        const text=document.createTextNode(TextSetting.value); 
        const cbmake=document.createElement('input');
        cbmake.type="checkbox";
        cbmake.className="checkboxContent";
         
        li.appendChild(text);  
        li.appendChild(cbmake); 
        active.lastChild.previousSibling.appendChild(li);  
         
           
    }
  
    function renameText()
    {
        const checkboxgrouping=document.querySelectorAll('[class=checkboxContent]');
        
        for(var name in checkboxgrouping)    
        {   
            if(checkboxgrouping[name].checked===true)  
            {
                checkboxgrouping[name].checked=false;    
                const TextSetting=document.getElementById('textSetting');   
                checkboxgrouping[name].parentNode.firstChild.textContent=TextSetting.value;
                 
            }
        }
  
    }
