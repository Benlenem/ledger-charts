export const emptyFile = '';

export const simpleFile = `<OFX>
<SIGNONMSGSRSV1>
<SONRS>
<STATUS>
<CODE>0
<SEVERITY>INFO
</STATUS>
<DTSERVER>20170825194603
<LANGUAGE>FRA
</SONRS>
</SIGNONMSGSRSV1>
<BANKMSGSRSV1>
<STMTTRNRS></STMTTRNRS>
</BANKMSGSRSV1>
</OFX>
`;

export const oneTransactionFile = `
<OFX>
<SIGNONMSGSRSV1>
<SONRS>
<STATUS>
<CODE>0
<SEVERITY>INFO
</STATUS>
<DTSERVER>20170825194603
<LANGUAGE>FRA
</SONRS>
</SIGNONMSGSRSV1>
<BANKMSGSRSV1>


<STMTTRNRS>
    <TRNUID>23064695037
    <STATUS>
        <CODE>0
        <SEVERITY>INFO
    </STATUS>

    <STMTRS>
    <CURDEF>EUR

    <BANKACCTFROM>
        <BANKID>12345
        <BRANCHID>67890
        <ACCTID>01234567890
        <ACCTTYPE>CHECKING
    </BANKACCTFROM>

    <BANKTRANLIST>
        <DTSTART>20170731000000
        <DTEND>20170824235959
        <STMTTRN>
            <TRNTYPE>OTHER
            <DTPOSTED>20170824
            <TRNAMT>-18.90
            <FITID>4848760150426
            <NAME>FNAC      23/08
            <MEMO>PAIEMENT PAR CARTE
        </STMTTRN>
    </BANKTRANLIST>
    
<LEDGERBAL>
    <BALAMT>-18.90
    <DTASOF>20170824
</LEDGERBAL>
<AVAILBAL>
    <BALAMT>+98.19
    <DTASOF>20170824
</AVAILBAL>
</STMTRS>

</STMTTRNRS>
</BANKMSGSRSV1>
</OFX>
`;
