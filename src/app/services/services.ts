import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { from, Observable, of } from "rxjs";
import { concatMap, map } from "rxjs/operators";
import { Entrys } from "../model/entrys"
import { convertSnaps } from "../services/db-utils";


//because in home.component.ts
@Injectable({
    providedIn: "root"
})


export class appservice {

    constructor(private db: AngularFirestore) {

    }

    loadAllArticles(): Observable<Entrys[]> {
        return this.db.collection(
            "articles"
        ).get()
            .pipe(
                map(result => convertSnaps<Entrys>(result))
            )
    }

}




// export class CoursesService {

//     constructor(private db: AngularFirestore) {

//     }
//     //partial means that only need to get optional fields
//     //this is partial because NewCourse is partial
//     createCourse(newCourse: Partial<Course>, courseId?: string) {
//         return this.db.collection('courses',
//             ref => ref.orderBy("seqNo", "desc").limit(1))
//             .get()
//             .pipe(
//                 concatMap(result => {
//                     //<> means that returned thing has to follow that format
//                     const courses = convertSnaps<Course>(result);
//                     const lastCourseSeqNo = courses[0]?.seqNo ?? 0;
//                     const course = {
//                         //want ... because you want the things inside newCourse, not newCourse wrapping around
//                         ...newCourse,
//                         seqNo: lastCourseSeqNo + 1
//                     }

//                     let save$: Observable<any>;
//                     //if there is already a client side generated
//                     if (courseId) {
//                         //return a promise so need to turn into observable sith from()
//                         save$ = from(this.db.doc(`courses/${courseId}`).set(course))
//                         console.log(save$, "client generated")
//                     } else {
//                         save$ = from(this.db.collection("courses").add(course))
//                         console.log(save$, "firebase generated")
//                     }

//                     //essentially pipe is do an operation and map is do somehting to every thing in the array

//                     return save$.pipe(map(res => {
//                         return {
//                             id: courseId ?? res.id,
//                             ...course
//                         }
//                     }));
//                 })
//             )
//     }

//     // updateCourse(courseId: string, changes: Partial<Course>): Observable<any> {
//     //     this.db.doc(`courses/${courseId}`).update(changes)
//     //     return from(this.db.doc(`courses/${courseId}`).update(changes));
//     // }

//     loadCoursesByCategory(category: string): Observable<Course[]> {
//         return this.db.collection(
//             "courses",
//             //finding a specific thing
//             ref => ref.where("categories", "array-contains", category)
//                 .orderBy('seqNo')
//         ).get()
//             .pipe(
//                 map(result => convertSnaps<Course>(result))
//             )
//     }

// }
