### Tips

```
this.index == oBtn.length - 1 && (oDiv.style.cssText = ""); 
```

**等价于**

```
if (this.index == oBtn.length -1) {
    oDiv.style.cssText = "";   //即重置按钮
}
```

**&& 和|| 运算符只有在前面的运算子成立 后面的运算才会执行**

