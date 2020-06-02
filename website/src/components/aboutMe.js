import React, {Component} from "react";

class AboutMe extends Component {
    render() {
        return (
            <section className='about'>
                <div className="photo"/>
                <div className="description">
<<<<<<< HEAD
                    {this.props.language === "pl" ?
                        <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.</p>
                        : <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    }
                    {this.props.language === "pl" ?
                        <p>Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym.</p>
                        : <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    }
                    {this.props.language === "pl" ?
                        <p>Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker.</p>
                        : <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    }
                    {this.props.language === "pl" ?
                        <p>W przeciwieństwie do rozpowszechnionych opinii, Lorem Ipsum nie jest tylko przypadkowym tekstem. Ma ono korzenie w klasycznej łacińskiej literaturze z 45 roku przed Chrystusem, czyli ponad 2000 lat temu! </p>
                        : <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    }
                    {this.props.language === "pl" ?
                        <p>Richard McClintock, wykładowca łaciny na uniwersytecie Hampden-Sydney w Virginii, przyjrzał się uważniej jednemu z najbardziej niejasnych słów w Lorem Ipsum – consectetur – i po wielu poszukiwaniach odnalazł niezaprzeczalne źródło: Lorem Ipsum pochodzi z fragmentów (1.10.32 i 1.10.33) „de Finibus Bonorum et Malorum”, czyli „O granicy dobra i zła”, napisanej właśnie w 45 p.n.e. przez Cycerona.</p>
                        : <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. </p>
                    }
                    {this.props.language === "pl" ?
                        <p>Jest to bardzo popularna w czasach renesansu rozprawa na temat etyki. Pierwszy wiersz Lorem Ipsum, „Lorem ipsum dolor sit amet...” pochodzi właśnie z sekcji 1.10.32.</p>
                        : <p>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    }
                    {this.props.language === "pl" ?
                        <p>Standardowy blok Lorem Ipsum, używany od XV wieku, jest odtworzony niżej dla zainteresowanych. Fragmenty 1.10.32 i 1.10.33 z „de Finibus Bonorum et Malorum” Cycerona, są odtworzone w dokładnej, oryginalnej formie, wraz z angielskimi tłumaczeniami H. Rackhama z 1914 roku.</p>
                        : <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    }
                    {this.props.language === "pl" ?
                        <p>Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego: „tekst, tekst, tekst”, sprawiającego, że wygląda to „zbyt czytelnie” po polsku.</p>
                        : <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    }
                    {this.props.language === "pl" ?
                        <p>Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu i wpisanie w internetowej wyszukiwarce ‘lorem ipsum’ spowoduje znalezienie bardzo wielu stron, które wciąż są w budowie. Wiele wersji tekstu ewoluowało i zmieniało się przez lata, czasem przez przypadek, czasem specjalnie (humorystyczne wstawki itd).</p>
                        : <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    }
=======
                    {this.props.language === "pl" ? <h3>Cześć!</h3> : <h3>Hi!</h3>}
                    {this.props.language === "pl" ?
                        <p>Nazywam się Paulina Wyrt, od roku 2012 zajmuję tworzeniem ilustracji, a od 2005 filmów animowanych. W tym czasie pracowałam w agencji reklamowej oraz współpracowałam z szeregiem wydawnictw książkowych i muzycznych, producentami gier i zabawek, współtworzyłam kampanie społeczne, prowadziłam warsztaty dla dzieci w zakresie animacji i ilustracji.
                           <br/>Obecnie pracuję na Uniwersytecie Artystycznym w Poznaniu, który ukończyłam w&nbsp;2015 roku, na kierunku animacja.</p>
                        : <p>My name is Paulina Wyrt, I have been creating illustrations since 2012 and animated films since 2005. At that time I worked in an advertising agency and cooperated with a number of book and music publishers, producers of games and toys, I co-created social campaigns, I ran workshops for children in the field of animation and illustration.
                           <br/>I am currently working at the University of Arts in Poznań, which I&nbsp;graduated in 2015, majoring in animation.</p>
                    }
                    {this.props.language === "pl" ? <h3>Współpracowałam z:</h3> : <h3>I worked with:</h3>}
                    {this.props.language === "pl" ? <p>Wydawnictwo Nasza Księgarnia | Wydawnictwo Naukowe PWN | Muzeum Narodowe w Krakowie | Teatr Nowy w Poznaniu | Centrum Sztuki Dziecka w Poznaniu | Magazyn Ask! | Wydawnictwo Wilga | Wydawnictwo Edgard | Wydawnictwo Adamada | Wydawnictwo Greg | Wydawnictwo muzyczne Trii House | Wydawnictwo Novae Res | Lethe Press | Fundacja "Zaczytani" | Fundacja Miasto Kotów | Kulturka</p>
                        : <p>Nasza Księgarnia Publishing House | Scientific Publishing House PWN | National Museum in Krakow | Nowy Theater in Poznań | Children's Art Center in Poznań | Ask! Magazine  | Wilga Publishing House | Edgard Publishing House | Adamada Publishing House | Greg Publishing House | Trii House Music Publisher | Novae Res Publishing House | Lethe Press | "Zaczytani" Foundation | Miasto Kotów Foundation | Kulturka</p>}
                    {this.props.language === "pl" ? <h3>Moje publikacje:</h3> : <h3>My publications:</h3>}
                    {this.props.language === "pl" ? <p className='publications'>
                        <i>Małe Licho i anioł z kamienia</i>, Marta Kisiel, Wilga 2019<br/>
                        <i>Kulturka. Repertuar 2019/2020</i>, Kulturka 2019 (broszura)<br/>
                        <i>Opowiem ci mamo, co robią psy</i>, Paulina Wyrt, Nasza Księgarnia 2018<br/>
                        <i>Małe Licho i tajemnica Niebożątka</i>, Marta Kisiel, Wilga 2018<br/>
                        <i>Opowieści przedmiotów</i>, Jagoda Gumińska-Oleksy, Muzeum Narodowe w Krakowie 2018<br/>
                        <i>Awantura w bajkach</i>, Agnieszka Olejnik, Adamada 2018<br/>
                        <i>Na tropie angielskich słówek</i>, Praca zbiorowa, Edgard 2017<br/>
                        <i>Pan Tadeusz</i>, Adam Mickiewicz, Greg 2017<br/>
                        <i>Romeo i Julia</i>, William Sheakespeare, Greg 2017<br/>
                        <i>Kulturka. Repertuar 2017/2018</i>, Kulturka 2017 (broszura)<br/>
                        <i>Pętla dobrego samopoczucia</i>, Carl Cederström, Andre Spicer, Wydawnictwo Naukowe PWN 2016<br/>
                        <i>Floating Islands</i>, Audience Killers, Trii House, Łotwa 2016 (okładka płyty)<br/>
                        <i>City of Cats</i>City of Cats Foundation 2016 (posters)<br/>
                        <i>Bajki Ezopa</i>, Mirosław Krzyszewski, Novae Res 2015<br/>
                        <i>Liori</i>, Anna Anton, Novae Res 2014<br/>
                        <i>O prawie rozmowy z użyciem głowy</i>, Anna Garbolińska, Novae Res 2014<br/>
                        <i>Olbrzymek</i>, reż. Jerzy Moszkowicz, Teatr Nowy w Poznaniu i Centrum Sztuki Dziecka w Poznaniu 2014 (plakat i program teatralny)<br/>
                        <i>Kulturka. Repertuar 2014/2015</i>, Kulturka 2014 (broszura)<br/>
                        <i>Purgatory: A Novel of the Civil War</i>, Jeff Mann, Lethe Press 2012<br/>
                        <i>Dwujęzyczny Tuwim</i>, Julian Tuwim, Novae Res.
                    </p>
                        : <p className='publications'>
                            <i>Little Devil And The Stone Angel</i>, Marta Kisiel, Wilga Publishing House  2019<br/>
                            <i>Kulturka. Repertoire 2019/2020</i>, Kulturka 2019 (booklet)<br/>
                            <i>What dogs do</i>, Paulina Wyrt, Nasza Księgarnia Publishing House 2018<br/>
                            <i>Little Devil And The Mystery of Poor Thing</i>, Marta Kisiel, Wilga Publishing House 2019<br/>
                            <i>Stories of Objects</i>, Jagoda Gumińska-Oleksy, National Museum in Kraków 2018<br/>
                            <i>Row in Fairy Tales</i>, Agnieszka Olejnik, Adamada Publishing House 2018<br/>
                            <i>On The Trial of English Words</i>, Group work, Edgard Publishing House 2017<br/>
                            <i>Sir Thaddeus</i>, Adam Mickiewicz, Greg Publishing House 2017<br/>
                            <i>Romeo and Juliet</i>, William Sheakespeare, Greg Publishing House 2017<br/>
                            <i>Kulturka. Repertoire 2017/2018</i>, Kulturka 2017 (booklet)<br/>
                            <i>The Wellness Syndrome</i>, Carl Cederström, Andre Spicer, Scientific Publishing House PWN 2016<br/>
                            <i>Floating Islands</i>, Audience Killers, Trii House, Latvia 2016 (record cover)<br/>
                            <i>City of Cats</i>City of Cats Foundation 2016 (posters)<br/>
                            <i>Aesop's Fairy Tales</i>, Mirosław Krzyszewski, Novae Res Publishing House 2015<br/>
                            <i>Liori</i>, Anna Anton, Novae Res Publishing House 2014<br/>
                            <i>Smart Talks About Law</i>, Anna Garbolińska, Novae Res Publishing House 2014<br/>
                            <i>Kulturka. Repertoire 2014/2015</i>, Kulturka 2014 (booklet)<br/>
                            <i>L'Ogrelet</i>, dir. Jerzy Moszkowicz, Nowy Theater in Poznań & Children's Art Center in Poznań 2014 (poster & theater program)<br/>
                            <i>Purgatory: A Novel of the Civil War</i>, Jeff Mann, Lethe Press 2012<br/>
                            <i>Dwujęzyczny Tuwim</i>, Julian Tuwim, Novae Res Publishing House
                        </p>}
                    {this.props.language === "pl" ? <h3>Moje filmy:</h3> : <h3>My films:</h3>}
                    {this.props.language === "pl" ? <p className='publications'>
                            <i>Synestezja 2</i>, muzyka: Aleksandra Słyż, oprawa multimedialna: Paulina Wyrt (spektakl muzyczno-wizualny)<br/>
                            <i>Synestezja</i>, muzyka: Aleksandra Słyż, oprawa multimedialna: Paulina Wyrt, Akademia Muzyczna w Poznaniu 2017 (spektakl muzyczno-wizualny)<br/>
                            <i>Furia</i>, realizacja: Paulina Wyrt, Uniwersytet Artystyczny w Poznaniu 2016<br/>
                            <i>Circus In The Sky</i>, realizacja: Paulina Wyrt, Trii House, Łotwa 2016 (teledysk Audience Killers)<br/>
                            <i>Ptaszysko</i>, realizacja: Paulina Wyrt, Uniwersytet Artystyczny w Poznaniu 2013<br/>
                            <i>Bez tytułu</i>, realizacja: Paulina Wyrt, Uniwersytet Artystyczny w Poznaniu 2012
                        </p>
                        : <p className="publications">
                            <i>Synesthesia 2</i>, music: Aleksandra Słyż, multimedia settings: Paulina Wyrt (musical and visual spectacle)<br/>
                            <i>Synesthesia</i>, music: Aleksandra Słyż, multimedia settings: Paulina Wyrt, Music Academy in Poznań 2017 (musical and visual spectacle)<br/>
                            <i>Fury</i>, realization: Paulina Wyrt, University of Arts in Poznań 2016<br/>
                            <i>Circus In The Sky</i>, realization: Paulina Wyrt, Trii House, Latvia 2016 (Audience Killers music video)<br/>
                            <i>Tainted Bird</i>, realization: Paulina Wyrt, University of Arts in Poznań 2013<br/>
                            <i>No title</i>, realization: Paulina Wyrt, University of Arts in Poznań 2012
                        </p>}
>>>>>>> 5aaa45053e94f2e89f4f2283cf1ec6d2410a6e4e
                </div>
            </section>
        )
    }
}

export default AboutMe