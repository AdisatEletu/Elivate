import React, { useState } from "react";
import { doAlert } from "../../../components/alert/AlertComponent";
import { FormInput } from "../../../components/forms/Input";
import { putRequest } from "../../../helpers/requests";
import {setCurrentUser} from '../../../redux/actions/authActions'

const Account = ({ profileDetails }) => {
  const [activeBtn, setActiveBtn] = useState(false)
  const [input, setInput] = useState({
    fname: profileDetails.first_name || "",
    lname: profileDetails.last_name || "",
    uname: profileDetails.username || "",
    email: profileDetails.email || "",
    phone: profileDetails.phone_number || "",
  });

  const handleChange = (e) => {
    setActiveBtn(true)
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let q = {}

    const values = Object.entries(input).forEach(([key, val])=>{
      if(val !== "" || val === undefined){
        q[key] = val
      }
    })

    const {data, success} = putRequest('/customer/profile', q);
    if(success){
      doAlert('succefully updated', 'success')
      setCurrentUser(data)
    }
  };

  return (
    <div className={"profile-card "}>
      <div className={"mt-5 d-flex flex-column align-items-center"}>
        <img
          alt={"profile-photo"}
          src={
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGBgaHRweHRwcGhwcHhwaHCMfIRocGRocIS4lHiErIxocJjgmKzAxNTU1GiU7QDs0Py40NTEBDAwMEA8QHhISGjQhJCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEHAP/EAD8QAAECAwUFBgQEBQQCAwAAAAECEQAhMQMEEkFRBWFxgZEiMqGxwfAGE0LRUmLh8SNygqKyFDOS0hXCBxaj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAJBEAAgICAgMAAgMBAAAAAAAAAAECESExA0ESMlFCYRMigQT/2gAMAwEAAhEDEQA/AKTEVRaREFCAcUqiCotUIrIjjikxAiLFCK1COOIGK1RaoRUoQoSBiLx0mNNdPg5akpUu0Sh2LBJJnNi7MWhZSS2NGLloyqjF92uC1sU2a1pxJBYSnk9BI1oAXMb7Z/w3YWYmkWiiQcSwCA2SQzCftoaYQxAlQOweQy5AdYjLmXRWHA+w692wKSBA1x2ZZJTjKXWplFUzMgd16CMn8RfEC7syUIChQlWKSg7Ck3ArGr+H9oIt7BC0yChQ/ScweETSfsy7a9V0BXi0DkaQVYthEq6wNabIK7wFk/w0zUj8aw2B9wmTr2cnhhfVhMKr2NgqvFwRaIKFJGAju05yzfOMBtz4WXYutBxoE/zpG8fUN46R6NY2RSnErvHL8I0gDaFoGap0isZOJOcFI8mBjrwbte54FkpDJJLDQ6QGlBjTF2rMjVOjjx14kERIJGkcKV2NmVNB9ld4HsV4TIONNOBg9F+RmlXJvvDCsc/DKWtkx6Pijzv4ZvIXapCUkby3pHoGKOAjw9C7RHdWeBghG1ljvoB3iIGxJAKQTqx9DFCwRVxxBHiHEKOMkbWszUlJ3iCUWiVUIMZ9QcUfgx8orCA/ZJB3Fo440akxWUwlRerRNFONDF6NrH60HiJxxwesRQuPkX1CqK6ygvZ9wVbrCEVqTolwCrliEc2MlYz+E9jotlKXaB0IIAGSlSJfUAZb43i6N14RRcbmmyQizTRAZy0y+cuJj62tG3F8+rPlIeEY5y8mbeOHiiFraMC5+rIFRdpMfHlA94vSUgqUaVek5pDEzJd2gDbO1xYjEZgYu7XQPNuTvOM2jaZWrHaKZ2woJdgJOdSTmaeJWMG8jSmlg0C7kLyk/PSMJGEBLhg7gu9Xm8W/Dt3TdSqxxHAS6Sr8TMQTqQBLdvgO57QOLATI045daQwvYSpRCgCm0ArqJHwhspUBU3Zobvbgg4SCxIlrX1imzTitZ0QH5mQ6MfCFmxbP5GNFQSVA+E+QT0g+wtgFrfNIbkT9xADRT8QbYRY2ZWo7hvOgjObFvarc48stRwEB/Gi/mLRZzaajxoPU8os+EeyCk1Bh+rF7ot21ccSVDWYOhyjH04x6DtjuyrGb2hsdxjTJWbyB3vlFITrBDkg9oRPHzw2u2yUGa7UHcgP/AHKl4GGdhsq7L7ASoEiSiou/CnhD+cUT/jkzLPHUxbe7uULUg1Sa674rTDk2an4HS9qToI3+KMP8DpZSzuEbPHDCHkt3MvepiZVA6FskR02kcOctLJBqkP49YpXdhqec/OLSqOFUBnAyrqciPEfeKV2Shkej/wCLwwSgnKJixOZgBQoFliISEuSQABMuaCPVfhnYqbtZhJ/3FgFZd5gPhGQSH5vCv4R2UntW60uEyRiDnEJlaX0oDxjSrtwHcgbzN9QA84zc0/xRq4Ydsnb2oDNMvR9+YyDmsJdp39CAVKZ5tX/kTlQRTeb2tZUEP2SUkyKWcyBG5taxnLjsxd8WoqJFkkka4jkB57gRrCwheWPOfjhCXam2FL7CVKKHdkh3MzMuAWfSUK1263BckaF9fvGl2/c7O7sgAKUcnkNHAIxHm1JQosrmu0ojpGlNJGZqUmV2e07RLCZAzrvB96R6BsvaQvFiD9aJkbxXg9WjCX3ZK0AHCZGHWxkrATaWbuJLTq2rVk/jCSSkrQ8XKLyegWSgtAUDNqxlr/tq2CsSULKQVJKkYSQxY4kGrs/rDXZt+GFgeyS43PUHgYEuqQm8qQR2bXtJL/Umag2bifIxD/DRfwp2VYLtFlVqE4siHBY/iE2MjSOWNsLO3KXAE2k0wZuRU/cRobADGoJEgJnLFn4RlvjOzKVpUnssSAJTBmSSJjJgd8csujpYVmgvFskpcmIWdniEYzZ20QogFSiRkftGw2deAQJjwhvFoTyUhHtC4KsyVoDpzSMt43boI2IvGTaHuIz1UcvXpDu9lAHaLDx5Qgvt8xAIs0skOwAYe6wVkDwJ9srxWhXqT4QIgaw2XdHQx9mFxuyk1EhnGiLwZpxpmo+E7btK4Rp/mxj/AIXWcSmGUabEYclR5ZfVsgEfi9IERelDfBl+H8P+r0hagRww1uxxBzBiEgZQHcaQckQpxN4I2fdTa2iEB+0Z7kiajyAMCkxrvg244Uqt1Cauyj+WRJ5kf2ws5eKseEfKVDu8kIQyRkEJA0BYfflCwE2qwhBLt21OJA6ECpoN0T2jaOtn3NvamjVMoabKuXy0fmM1H8xy5BhzjPGN5ZrlKsIXbXu2GyFmiSrQ4EtkFd9X/F57zBnyUXa7EgSs0O2pyHVoLRYBdoFmYQCE8TUwP8QpxBFkPqUCeCZ+cPdImo26MVs74bXeFm1tS6lF578gMhujX3PYKEJkIbXOwCUgNF6xCO2VSSwhHeNlIUCCkGENhs3/AE9rLuKkRVjkffrG0UIBv1mFJo8BOhmrMtti7myXiTJKp/c/f9IDtLULVZlyClaCCKjtB58OojSbUssdgDUpcdIw4dKwnJ0qSdwIly9INWTujdWV4e0CAwDHKpM5b2B8YQfGFiQlzmp8iwIYPJ3O85Qfse1x2r6JOTzk3CpnvgH4wKScLTFJGm8nmzNSBHEkGWYsyQDFwA+8OPGGdw2kujhP8oA8oXGkdsUMcQLxaVEINmqsxiHaL8Y6bECggG5lTQzs0KOUSuitFabtmSwiu1QAkgEdosc2G4A1YvB4QBUiULrzegCWqxaRduecFS+AccEdnHAshIMxnJsxDb56oSXO9MqoPTwb11hj/qTofD7xoUsGaUcmHvQ/hHiIWphlbj+Ev+nzMLUw4o0uNIYJEL9nQRfryUJBABctP3ugMKQTY2RWtKEhyohI5lo9KWhKEJQgMEslI8B6kmPOvgha7W9BRHZs0qWpgKsQkTnMnLSPQb8QzHuyek2ZgOcZ+R20jTwqk2B7Pu5WsLUGZ5bnlzMuQEPL3aYUgZn9/fCKbijxPgK+LxG2VitjohPUmfoP+UM1UaFTuVhtyRhT5+ZjGbS2+pN9Un5aloQAl061U0mzA5RsrzbBCFKJoPOsZPYd6St1kjtEkvvhZUkkUgnJtmquV7C0gp0oQxi9Ziq6tlEL/agBjnC9FOxXtT4isbIsoqUdEpf9oWJ+L7qo4VLUh/xpIHWkNhdLNRmhJerh47a2Vg2FaLNtCkN4iBa7OafRWi0SuwWUkKSHIILimRjGXmxDiWo8W9RGzsbjZ2VhaJskhKVqJYUDhILDKlBGVvqWxGmHEX3gA+nhDRROTCfghbi0KnBDTkzH10gH4ltipbPIUDgs4zOZnDb4XsMF3WtgCtVZ0AAroCD0jPbbtgpZKaEs9ZANWAvYMsRFag8G3FTkO8g71fWQgMR2yXgLtFZK0QhKmam72YGYGn6ge+kHlaUio5frMwmud6loONTvzJ14wQu1eQk4aoG4GUjIGM1OzVZXftpEhka1Gg4GR6cIBsbAlyp/eb7ovs7N8Jr40yPFsoMsru2U3FZaVIzrlDJ0K1ZRZ2Jnu0fxPACD8PHp+sdRZjlKQ3NRvcotwJ9q/WG8geKMEr/bXwfo8Kkw0fsL/lPpCW2tSlmjWYhzsyJ7ZHYH8w8jCOwv6xQtyHrGi2ir+GZVbxhWhkab/wCOrsybZTJkUoCmmVM6mP4Zp4sNI0d6JUtAaTuN/wCgzO8Qp+BnF2WX+tX+KX8SYeWCHteA9+9wiP5GjURhYJwp4BvfSA7qhyTmtZJ/lE/LAIvvC2TvLNzkItu6GfcyRxz8TDNipCD46veCxwYsJU5GXdBUBzwN/VGD+FwtSwkLtMOHE5BIxylKbGebyejxudu3RN4tMKg6Zht0p/2jqYY7M2QhAASkBvecLKSeKKR42nd0F7KKsCMQZTTDv4wu28o/MRDxCGkKwj+IUFKkrelecTrBVbFd+vtqiyWtLoKSluzjWoKUAVpHdwhJJaZLZRi7S3tV/MWbyoYSCMeFOKbNhFC2Q51j1CxskrSAQ8oCvPwpd1uSgOd0NFpdE5KTewX4ZvC13BC11UVHkFEDwTCvaSewvn4tGrtLqLOxShMgkMPOM5eyCDpiHQOW8IdsRJ9jNBCLshJl2Eu5ZpUNNDGP2slTgqzmdAZuJaN0aNZeLXEEgmYabUPAsGrxjL7bE0iZYZ5DIO7NLQUiUPYfk9RUmI2tDwiYjtml1ARd6Mq+A13vS7JhhxJ8Rq2UaO4XtFoJNTPLIONfvEDYIoR1lz3/AKQMvZ1mSZYTqHEx6ziLaZqUWjRWaE5AfefjE0pfh4UHvmYzaLsBRatHxGkmzm1OUXoWsmS1e5Fzy8InQ4/NXenv3nWLMQ0V0P2hDZfM/GTry3QU6/xHx/7Q1CmRsppUNUmEVqsGTQ8u5qNx8jGfIjaYGF7LSkrwqAL6w/v3+2dzHoQYy9mtiFCoIMaa3WF2JUKFIPiIDDFm4+DUD/RIaWIkk7yZvvYdGh7dBNR1lzeEXwYB/o0UcKUd4ImArQs3KH1zMidCT76xnXszW8xRYsuv8qHJ5Ujlrb4EEmoD8Vrp5kx9ZlkKUcy3JNfWEW3L0SU2Y4niqU+ALczpHNhSGeyrHE6tacIdhDQv2MlkDgPCGZhUijYo2lfLVCkJsbIWilKAUSvCEpzNCTwhFtq+WhtkIwA2SnC1leHCdwadPGH1/vyUmRGLXSE1tegsYCyk1pmZzhGy0eNtXQz2KrEgETGR1GRhoowmuN6DMMqj9IZotXhkTkC7VMm3ebARmbyiRemOZ3SB/wAo0e1Vf+vn+kIbezxWdqnQLP8AxH3ihE5c7QlInPukydxLWvaZv2hHtkYu0AUszg8VTlIPpDawXiGIFsQBcTIJHaIZpu45Qu2woYCNVBjubJJmN+8b4SKqQZO4iQR1CwkgmjxFa2DmPk2BVMz5U5RaTSRmgm2PgkqDjyrR/WIqDVoPKXjKA9n25QcC+7IA6kn6n41h0uzxBxzZ+h0974zPBsTsFRZg0GvXfzghNnPyppvgMKKVFxnpTw0b3ODBeA0p+/CBQQhNmEh/T2dIub8q/H7wqtVLWZFk00NKjr7yh/43eekMIZewW0zofKFarp+bwMHYZRzDuMazCBpuoEsR6frB92tEoSpCQohTjtEGZpQUl4xWbI/hV4/aJ2N3ViHYPeFXy1g2Gj0f4KIN2IDMFrG+TMVPruybfDpa8KFHMu3oIzfwRJNqhm7QInxlhc01FcXCNJbmaE5P5ezEZLLNEZXFEL/ahCUg0QlzvbLmW5Ewj+Sewtc1KIUd3b9AYZbRTjVh17R4JbCOp8I+vyGs0SorDyLDzhWsDp5GmyrTLefGD7yklJCSxIZ9IzllblC1PklKvFlf4/3RobvaYkvCfop+zJ365EOlRKj0fg0BLsBZpxIKgreX11jbXm4pWGVAP/h7L8DtrOEccmqP/QvGqM3sNC1LWtanCpCTS9Y1NgPL7QFb2YSZSAgq5nsknh0mYeKyZpyvIPtFXaA1U3JIn5wv2enEpQrjSr+5/wDqYuv1ocXBJf8AmX+hHSKrirCtX5MA6uT/AJ+EUSIyeBLdpIZ+6ojeUqfnn4mBNtlkAMR2vvrP9jDK8Iw2ixRlKP8ASokpfz5iM38Q3jCEhIDlySzAFgxbhlC1/Y5+ottFqUncfKDLjaqSwWWGSt35j7HCB7sBgSZsPLp7Yw4u1iCJjy9M/wBIMpfQQj8DhYJWnJsoquyVWaw6iUmoJJZ9Pt7ELFRsjmUnWbc9IahIWARmxnodBOI2WJ2l2BDs2eXvnFCLq1CfYeb8RBgVIPx9X5cI719k9eQgJnUCCxVrVsvdKxP5J18otTwOec/GOfPP4h0EOKZ75KR9IjuER8TECuNphPlRQVM/uYIaJrMVPP3y9IU40vwo4WQDLPfWvhGi+t9JdZf9ozfwoqb54VeYkY0VoWYazO4CnjCSKwAbvbYrxag0CEMOCiT5iGN+sns1gChBhZspAVaLWMypJ5D9BDzC6SNR4+3hawPdMzu1FdpJc9pFqg8cOMNv7ML/AIe+Lig4LYULOJiRq0NNp2fZQdFjooKQfEiMG3aSTVucpKBO4+sBxVDKTTPY7vtBC04kKBB0MdtLwlId486uAKWIJHAwwvGMp7S1EcTCWWQbtTaySrCggkkCU5mQHryh3hCEBOgY+aiejRjvh664rYLIkh1T1OZ95iNReLR2Gszw9sIeKonKVsqQgqmakud36TEL/wDU4fmFpqdQ/pwt4P0hutLJOtOp+5hHtJLEtkZ8CSC/h1htITZTfl4lYtUjqCPRox9/WFrUQJhhxbPxMOL5fUjsnN+IBrCa3u5ScaR/NPICgGv2he7C9UWbKQxKC86ykAdeEObqGLEHcScnZ/MQvubLZSfVJ++UMrynCpK8jLr7MTnllIYQXaocU98KwPeAtACkTGaWkeGe7cDwgqznx8fBsouVZBSC+QiaHYPcdppWA7pPUPuMMLC1Sqh8vtT7wnulg4Iah3S3frHNpXUpZaFFLaEsS4aQl19YNKwN0h0tHQges/OI4fzD/iftAFyviyBiYlp66iQpWGHz0/m6Qwph73tgJAwpKi7afeAlbcUPoI5/oIESgKWgarSOsaFew0OQFrDEiqTQ70vGxbo8+UvHYiXtxRybgBFX/kSaqI4+oEOrT4feloeaQfUQDctjW1paCzCA8iSQksNSQTSrP6RzR0ZKWjb/AAFYn5alHXfXIe9RGhWt8Z4AeZA5CKLnZosUpu6CMQDkCugJaj04DpZaJHYCS4Bmd5qfesSls0xwV7AsylLKq5J4vPzHSHSE5aFuXsmFzYCTlnwz6wfYrffkeI/SfOORz2Ldo2TpUN6VdCFekecXhYTaToSTzWSfIx6jfku7Zj0f3wjzLath/GWk5P4SHpHdB7GV1tShtIYWm0ElLCEezbyAMCzKgJyOYOmUG29iUdr6c9Rx+8TaKKQ82WoJSWzNdf0n4QwulpiU9fQD2IzVneu6lOYdus/KH+yFgNuST1I+0MmK0NbcgAaO/mfPyjMX+1xFRyYsZ0DM7bwDyhltq8lkpDupwW0rLmSITLmS2dQ2e9nfjAlIaMezI2tkta1Kc4nMtWyHAE9IabNniBDEEuNQN8ctLsU2hYO5dpHQNLOXjBFnZ4bVNAFImwH0s5L8YDlaOUaYvtULsbUENhWqQMgCdxMqmNJboC7Jx2dzOxyAD6yeA9t3MqsiW7SRiSSHoxAGc5iDLioLskkaBxN9TrSsJJ2kxkqbRG42mJP6BvvB6CcPtvHKEty7Kik1Bq+WWUpQ7shn+npCMcEu5/iKyeglT2YKtrMFCgdPeXtoGPZtAX1qwDPq0673g9Z7J9Z+FMo4AtuSJEEUMhuy4CkzpBeAaf2/rFN1SxUJ1LGQzMxUTq8F/LV+Tr+kOKeZ3dAK0FwCFoMzWdHNI2dldLRalYEv2lGqWEzMl4E+E/hX54FtbOLIHspBwlahniEwkGuuRrG4xJT2EhIb6QzNSYqT4xeUkpWjIuHyWdCGw2KozWtIfITPBz9WbThxs64Isk4Udlzkzq3qJMzQcYqtAqSg+RzLM4VWki3GLEXguRJia9SH3Gh8hE5ckmXhwxjpEjcUIxLSgY1VVmpmFZnMz30gKwWULUFd0qA3BRox9OEM0WwPGpkS1KcjSKL/AGAWKCZfmMwJMaQkZO8lZRVYDlIxDiPHLxge5rYtuBHESI4kNzEfXa8/w0rmWE9WoT6xXfThViE0kYhoRm3Ef5CNCModeTIlqMeWY96xhdt3b+M4anUa85+EbRFqSkvMoLHek0Pn0jPfENhhKF5JOHilU0nkARAGTEi7kG0di+/I+98G7OWQAhYJRkc0ag6pybJoLsEBQasj4R8LMIUlxUHmxmG8YWWB4uyCtnizWq0SHdJkKZTTm0ved1xvhUogBmQ5pqJbqmCAnAMKj2FTQr8OUt3KA1WRSskBiQQoDKTgjdLxhUMyy/DFhEpZy0BPCcuccTYBqgO9J8H3MG3QHaWiyVAFg48j+kSQgkCcpyHLSVfB4STyPHRK0AmkYSonNpk1BLN0hbbra82aQAGCjo2I5gj8tRruhqbLAkkuwqTLJnL7q8DrCe5grtjaakZDc5lw/eAgs0y0OH97n6ThVsd7Na7N+yolSKSCi7FhkXFfph4hDhy7HlqTpoaRnNqr+XaIWGphNAJzBP8AUkj+qAs4OeMk9pgItAoSdxUalzWTwxuS3An6+OcV7VQ9m4rlxE2JoP3EC7PtnAGvPdSmsdtHBl7SAtJ3twd8uvsQeA41+27WAr0mYOYnmG468N26DQezy1fhXjAOArIdsgu5fIhwH6mk6yg7CdVQDZJD0rkzh5yzYxdyT/bDi2jUru6UICEJwpCQkYQ2FKZAAZACnCEu0EFLFJd33FtDpPyh98wKkDxk82eWUA327YtAGAURKQ73mY6wpYFlnecRbSRYFg+QJAGXgIsDEu4LMNJsS4Z5+8oUFRQvCXA3meurmUoKReVBSQOzQz7Rmfqm6ZeJ6hhRahRSHFK5ks4JM8siN0EWN4xAjOp9H6RUsOnMkgBzV5lmrp1gC7LIUpz2tHzyBOrGAjmxxYkAENKoGuo84osS9mtBmqyU4fNFR4HxiV1tcQBbQjgZfrFdnaYLZzQsk70q7p8x/TGmOjNLZLZq8OFORARP/wDMnlhB5xZf7pjQpFZSfSqX3g+DwGtBAWh2KSQ+maTwfzhmu1xJSujgPufPkpxDUKZjZ9rNLyKSUkcQ1OnSHYQFAgVDKSePtucKdr2OC0xjurDqGikmbe9NYYWdqAEKybCf5d3J+kK1YU6yRveFaChZCQaE5Wjs+5Jdj1hfdlqwhKx27OR1In2eTGfCGVujGFJO8SDu4lXJi/AwBZkqBP1pGBdfpmhfPCz6jfE18LN9gyUMovqkOdwLP1EHWFn95tI+wDyhdb1UsZENN3ZhPl7nB90t8QkSRl6vnlE5FIgO23LIFCSCAGYVnxYezE7jYBIEvfnkY6tBUonJyxIImz5TlkSKQZdvdC2gBHEiFvA1DO7o7IPDJnFeu/dCL4hs3QtmcszyxETMhWeEcDD27UaU/WtNN+6A9pgMXyLjMnKT1Fcso6OwS0Ldl3grsgGaVJdGD798AXcFC1I0JyNDuLexFPw8soWuzJ7iikc3InnKC9qow2mMPMgHSYfSon1GkUazRNPFjIdpp050YPMb4vSsAVaUmmGFOAmOHjAN1X2RrzDe3EXWiwUk4mluz0OtPtAo5sjbWgScgH1z14PnCv8A+wWevvrFW1b1MIcB35ijT40hd8tOiY0Rhgzynk9SczFWrvlJ9R5x9Z2wV2WDyxMwBzk1aPHy1gdkSxSMjk2LhLOJrQGcgPiADAOZSbk8ozmoCv8AdApK2AJpUgym7PqYzljbqT3icTCQqRPNzvyzjRi0wo7ScJxSVWYLDEmphdtm7kEFCWJD1IAaawHZnDS1gIJTdrd2Tm4ozneBJy7vu4wItbLFXxTLM5LFtwy4CKrtblwHwBhIYSZMwdwwnvj6+rYAhwCouRqxDOcm4TgpZFehls5bEji3CWutYJ2gks44de6eSmH9RhVcbTtqbXV9ZBsqNDq1GIMaTSeecaIaIcmysLxKQvK0ThI0WmTeXQxbs9fZXZK+ky3pVMevOAULPylgzKCFtvErRuIJVzgm3kRajIT3pqSN4qOJhyVlG004kFJ7yJyk7SV4EGB9lKdGEz+4l6Qdew5ChQyPBm9W5QouCihSknI/v5QKDYdYryLgoZP9BPZVymIHvvYXjbsKThWRKSjrkBUFqjrZfyUKCwHDTH4knvpG9gCBkx1ixagUKJZQCZPJ0Fi9dPKJyVOysX5KgSyQww1YVyYio3NN4EskKS4ZgQzOBWRMqAs/pBtzk0izYZ1aqX5v4R21spEznJXN2pxHIxF4ZeOUSsJtJwSdzyeZdyZnq0E2AoMtWlPOm+mUB2cjIDQtIOPJyDIaDUQyuyGG8NKRP6+2hBgqzQwfnKr5HoQeUBX9fZU5Z5EnER2cTlnlWrtWDkBmZmcjSvdoOBgG8kSA4ZO0+yDWeGkdE56MctWC8hX46gaplP7bod7WGKycaB3zYhpZZwj22JpUwcKfIgDNLiREmaH9yUV2LZkCTEhmYGR5xV9Mku0DbNXKchxce6wRbKIm06aGTkuZ5dXhfs5wopNXo4yhlaocTqWwyeYLzGonnrKOWwPRjr+O2X0HkfvFLcen6wdtUdvPe7VzgBuHQxqjoyvZ6Ja3VaFY8eEsniSSchKkm0jl32oUYjaOZ4gXwiUlB1UmwGrRqbykYsRBYJLnjIO/FoUXzZKMLFQDAGpYglwDQAPpGOzbTPrvfULGFJQWJcEuB/VQz0ziGMLSUqxYwHQQz4VZhhL0DRm7ewXZF0A9ov3BhKAKh85Fpzcwyul8NokLodEklnAcEkcmfKOa+HJgF/swF40JSE90SZiKc3INKwJfcWE0cYTSeb4QnKNHeLNKxh+huyHbtEEkuA70lGWvKlJSpJSUkaSbKdR9MGIGG3S3GIHVpCTACbDQt4bo0CF94bgen7xkbiumbEbwHOR9d8aexX2j/L5fvFoEJnxXhtkk920BCucj6jnFuzFKwrsj37MkD8wHdPAhusCXgOidUq8CwPiYuTaELRaCeIYV71IkeoH9oihIna9wgPhYqTqCmeHkzcjCq0WysepY6ORLhUw+vSQDj+hddyjJ+frGUszhtV2SzIyD6DunfJoLCh0oYkNmKenKj7grWKbjaBig0ctufL9uERuyiOyTST66H3rEErOLRQM+GfEh35xKeivHs+tlFNoEzPzMRdh3xNhlLswelGJIM6aPMmkgzmRrJoF2kHQFDJSVpkPpdTOZgsKSi/Y1qFg0rqeRJ9G3RB5Vl44dHEIZyQZSAkDIeLl4Y3ZAEjzLjSkm0Hsxf8kZSHI4QdBu9iIqLJlVizgtzfNgG1aEHOWhZpVAZxwmdwkXgK0dQJocKhifM6UemgmImspMsRaYcv3Zgsavq2lKx9aJDnFSYxFspBgJJzDxyOZnNtWDoLmYmJMA1QzsFZb5R98MWnZKCW0FCQdD16QdtBBKCS8u8+rAKd8+WZhXsFZStsvJqZ+MVWiP5E7cYLdQ4b5sHnxnKkNcOJJ513GrHrAG20NaJVicEUPFw06TI5QZdj2QxMqu0iOOs6HOOf05doRbcRTcpjPjv9yhK/DqPvGj29ZdmdQxHZIEnrxEZ2e/3zjRF4M0tntCFqKUknQkEVzD5g/aBrwUIxEkDnMAuZuN9IAtL3aKSrChilbBauyGGiSX1pC3/wAgD26LKncpnhEmegYjwjNRr8hleUFSCgLcEneoJTNpGU8ozF/ua0utGIpJBLEAdkB1H8TQ3vF9xLxYCCAElzQu5AUN1TEFdtIwB6ggZE+k9dI7RzyUXG/haQHT2wCAAxJeYkA1Kwt25Z4e0B9eEgMRmXE3OkUj+DbMlBRZmScRdMq1cyJo+kNbYBaCgETAUNX7MuoEc1TAnaEt2PbE3T0/l8hD+7rdStQPP9hGbsVgqEmYprn7+8OLnaTXN6dEnD1LExaJGQ0tyAQT3S4PAgn0flH1iiS0ZgpWniJK9OsRth2QNZdXHrH11tMK0K/Gljo49+EUvJPoPutqDis1UUMSdZ1/ueM/ty7kELZ1IICmkWPcWOct7tlDW8Iw4Vh+wpQ5faRiy+2WNGNnIDEfiSe8PURzOQuuyhaICgXI0rT6k6T3xQpZCmIYipbLN9xEVWCDZqLHumRzDzB5gjrDD/UpWAFidAaftEm00Vimi1ZBQQWq7mbESKpyznCr4ftQHAIUArvZkA1erEecOLBYT3Z7hmSFO/GUuEJLhZhFqoJmHSQGkAoBTAk798RWmX7Rr0LLZiRlN2J4UyPKO2juwaY6hNM5H7wPYLkz68SRkSC9cotWQxJm7vSZk82DSfSEHKbUTYEPN8LyepYGRcDrEVJkSxerMBiLk1SaSd93CLQWWQ7FnMgC76ist/2iSDKbypIg1lIylpITOUccJdoocHNmcqkXbcHBmGeElyS1pImu6m7pGkv47JUUggTAAIIBZ2JrIcIzd178gTPcKhpPJ5O++KLRF+wz26gYQfzB3ak58Z5bons5YYO08nFOnTjnHNrqGDQNKZAkRpUSzjmzFSFfb+mcHo7sr23ZvZqMz1B3V5bpb4yDj8kbfaaHQsM/Rxk530HOMZ8v8hi3HohPZ6uuydRDFyJArcYdS59tANqpSCEoQ6S80pcNSbFn3whuF+tDeXKiSQ3IGkPkWpFniBmSZ1+o6xJlkBX25gYnCkgl2SrszzY+POBrUqSklLKzxBkswoQBplBt17b4pyNdzwLtu0KTZhMsWJ2ADzFYUIPewpaGSlJSSkhS54CozUMIrw9Ypu9otIWlRBIM2D4nmEhsmgi/SCGl3PMRUR/HVuBbdSkHo7sV213CLUyTMuMPdG6bZgiUG7OW6liuZOTP9oF2t/uI/kH+RgzZHdUfdYpAnIbWjgIHv3OKADgQQCSlVNQZRbejPkY4runiP/WGbyKlgNWJqz7qvLzAPWI2JKFlIdixG8CSvCccTX+hHmY+tO8gx0mBICvtmlxXDIOJnCZpI3Dtf8RFVnYvUMSzMxevZIMhxI8oJtu4P5T4F4ndqPmRXh+8Rls0R0RUClJyk5DVJYMC5Of7QoDJt1ZjskPoBvkOcOLTspLSkP8A1EJraVureB6wqCzQXZcgHlRhRgHDEuHGnGUG2Ts28b8wQ5lxpnC66rOETy9IM+gKznPPMQjKImUzo4cvImu//jPfF1mkgYXlVInlORL7pRWa8AG3dkmJWR7p3nwEccBX2zdEykNJpZyPeEiOEZm7JGJhqQT3dwyEqco1W0rMYVS+lf8Al+sZa5HvHNzP+pUUjojL2Ge0QTZMySWPCQJOF82gfZcwMsqaVAlSZizaf+0+4+IgbZyzr7aGSwK9ja9gFJr4V5meUoyOEfhPj/2jYW3dPD7Qn+YfYEPHQjP/2Q=="
          }
          className={"profile-image"}
        />
        <div className={"link-text"}>change profile photo</div>
        <div className={"card-grid col-md-10 mt-5"}>
          <div>
            <FormInput
              label={"First name"}
              value={input.fname}
              name="fname"
              onChange={handleChange}
            />
          </div>
          <div>
            <FormInput
              label={"Last name"}
              value={input.lname}
              name="lname"
              onChange={handleChange}
            />
          </div>
          <div>
            <FormInput
              label={"Username"}
              value={input.uname}
              name="uname"
              onChange={handleChange}
            />
          </div>
          <div>
            <FormInput
              label={"Email Address"}
              value={input.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <FormInput
              label={"Phone number"}
              value={input.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className={"d-flex justify-content-center mt-5"}>
        <div className={"grid-70-30 col-md-10"}>
          <div className={"small-paragraph grey-color"}>
            You cannot edit your username, email address and phone number
          </div>
          <div className={activeBtn ? "primary-button d-flex align-items-center justify-content-center"  : "disabled-btn"} onClick={handleSubmit}>

            Save changes
          </div>
        </div>
      </div>
      <hr />
      <div
        className={"d-flex justify-content-center mt-5 mb-5 align-items-center"}
      >
        <div className={"grid-70-30 col-md-10"}>
          <div className={""}>
            <div className={"danger-color title1"}>Danger Zone</div>
            <div className={"grey-color paragraph"}>
              Please note that if any of your workspaces or bases are shared
              with other people, deleting your account will NOT delete those
              workspaces and bases.
            </div>
          </div>
          <div className={"danger-bg-color danger-btn white-color"}>
            {" "}
            Delete account
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
