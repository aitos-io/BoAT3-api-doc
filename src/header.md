# 使用说明

调用api接口需要先使用 “获取access token” 或 “根据refreshToken刷新access token” 接口来获取 access token，在header中增加 "Authorization"，值为"Bearer "+accessToken，即可访问接口

其中"设备上报数据"接口需要device access token来访问。

设备报文格式组装：

```typescript
//设备采集数据的采集数据格式及rlp编码方法,里面的字段根据实际需求来设置
export class DeviceReportDataDto {
      duUnitId:string;
      power:number;
      total:number;

      async rlpEncode(){
            const dataArray=[];

            dataArray.push(this.duUnitId);

            const powerHex = Buffer.from(this.power+"", 'utf8').toString('hex');
            dataArray.push("0x"+powerHex);

            const totalHex = Buffer.from(this.total+"", 'utf8').toString('hex');
            dataArray.push("0x"+totalHex);

            const encodedata=encodeRlp(dataArray);
            return encodedata;
      }
}
//调用上面类中的rlpEncode()方法生成hash值，提供给下面类的ProofDto.dataHash字段
const dataHash=keccak256(rlpEncode());

//这个类是用来存放Proof内容格式及rlp编码方法，必须按里面的字段顺序进行编码，如果某个字段是0x开头的十六进制字符串，需要转换对应的二进制。
export class ProofDto {
      connectorId:string;
      templateId:string;
      deviceId:string;
      algorithmSuite:string;
      dataHash:string;
      timestamp:number;
      signature:string;

      async rlpEncode(){
            const dataArray=[];

            const connectorIdHex = Buffer.from(this.connectorId, 'utf8').toString('hex');
            dataArray.push("0x"+connectorIdHex);

            const templateIdHex = Buffer.from(this.templateId, 'utf8').toString('hex');
            dataArray.push("0x"+templateIdHex);

            dataArray.push(this.deviceId);

            const algorithmSuiteHex = Buffer.from(this.algorithmSuite, 'utf8').toString('hex');
            dataArray.push("0x"+algorithmSuiteHex);

            const timestampBufferAlloc = Buffer.alloc(4);
            timestampBufferAlloc.writeInt32BE(this.timestamp);
            const timestampHex = timestampBufferAlloc.toString("hex");
            dataArray.push("0x"+timestampHex);

            dataArray.push(this.dataHash);

            const encodedata=encodeRlp(dataArray);
            return encodedata;
      }

      async rlpEncodeSignature(){
            const dataArray=[];

            const connectorIdHex = Buffer.from(this.connectorId, 'utf8').toString('hex');
            dataArray.push("0x"+connectorIdHex);

            const templateIdHex = Buffer.from(this.templateId, 'utf8').toString('hex');
            dataArray.push("0x"+templateIdHex);

            dataArray.push(this.deviceId);

            const algorithmSuiteHex = Buffer.from(this.algorithmSuite, 'utf8').toString('hex');
            dataArray.push("0x"+algorithmSuiteHex);


            const timestampBufferAlloc = Buffer.alloc(4);
            timestampBufferAlloc.writeInt32BE(this.timestamp);
            const timestampHex = timestampBufferAlloc.toString("hex");
            dataArray.push("0x"+timestampHex);

            dataArray.push(this.dataHash);

            dataArray.push(this.signature);

            const encodedata=encodeRlp(dataArray);
            return encodedata;
      }
}

//最终需要发送的报文结构，data是上面的第一个类，调用rlpEncode()编码获得的值，proof 就是上面第二个类，调用rlpEncodeSignature()方法获得值
export class DeviceReportDto {
      data:string;
      proof:string;
}



```

