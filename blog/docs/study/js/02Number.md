### Number

**属性**
  - Number.MAX_VALUE 最大数值
  - Number.MIN_VALUE 最小数值
  - Number.MAX_SAFE_INTEGER 最大的安全整数
  - Number.MIN_SAFE_INTEGER 最小的安全的整数
  - Number.NaN 非数字（Not-A-Number）
  - Number.NEGATIVE_INFINITY 负无穷大
  - Number.POSITIVE_INFINITY 正无穷大  

**方法**
- **Number.isFinite(val)** 传入的参数是否是一个有穷数
- **Number.isInteger(val)** 判断给定的参数是否为整数
- **Number.isNaN(val)** 确定传递的值是否为 NaN，并且检查其类型是否为 Number。它是原来的全局 isNaN() 的更稳妥的版本。
- **Number.isSafeInteger(val)** 判断传入的参数值是否是一个“安全整数”
- **Number.parseFloat(str)** 把一个字符串解析成浮点数。该方法与全局的 parseFloat() 函数相同
- **Number.parseInt(string[, radix])** 根据参数radix把string参数转化为整数，第二个参数默认是10进制，可以传2-36之间的整数
- **Number.prototype.toExponential(intVal)** 以指数表示法返回该数值字符串表示形式,参数可选。一个整数，用来指定小数点后有几位数字
- **Number.prototype.toFixed(digits)**，使用定点表示法来格式化一个数值,参数digits标识保留的位数，介于 0 到 20（包括）之间，返回值是字符串，如果数值大于 1e+21，该方法会简单调用 Number.prototype.toString()并返回一个指数记数法格式的字符串
- **Number.prototype.toLocaleString([locales [, options]])** 返回这个数字在特定语言环境下的表示字符串
- **Number.prototype.toPrecision(intVal)** 以指定的精度返回该数值对象的字符串表示。参数可选。一个用来指定有效数个数的整数
- **Number.prototype.toString([radix])** 返回指定 Number 对象的字符串表示形式,参数radix可选，指定转换的基数，2~36，未指定默认10
- **Number.prototype.valueOf()** 返回一个被 Number 对象包装的原始值。